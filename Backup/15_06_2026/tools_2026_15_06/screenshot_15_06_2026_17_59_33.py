from __future__ import annotations

import argparse
from datetime import datetime
from pathlib import Path

from playwright.sync_api import sync_playwright


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_VIEWPORT = '1920x1080'


def normalize_target(target: str) -> str:
    if '://' in target:
        return target

    target_path = Path(target)
    if not target_path.is_absolute():
        target_path = PROJECT_ROOT / target_path

    return target_path.resolve().as_uri()


def parse_viewport(value: str) -> tuple[int, int]:
    raw_width, raw_height = value.lower().split('x', maxsplit=1)
    width = int(raw_width)
    height = int(raw_height)

    if width < 320 or height < 320:
        raise argparse.ArgumentTypeError('Use a viewport de pelo menos 320x320.')

    return width, height


def default_output() -> Path:
    stamp = datetime.now().strftime('%Y%m%d-%H%M%S')
    return PROJECT_ROOT / 'screenshots' / f'acessibiliufsc-{stamp}.png'


def main() -> None:
    parser = argparse.ArgumentParser(description='Captura screenshot do AcessibiliUFSC com Playwright.')
    parser.add_argument('--url', default='index.html', help='URL ou arquivo HTML local. Padrao: index.html')
    parser.add_argument('--output', type=Path, default=default_output(), help='Arquivo PNG de saida.')
    parser.add_argument('--viewport', default=DEFAULT_VIEWPORT, type=parse_viewport, help='Tamanho, exemplo: 1920x1080')
    parser.add_argument('--full-page', action='store_true', help='Captura a pagina inteira, nao apenas a viewport.')
    parser.add_argument('--wait-ms', type=int, default=700, help='Tempo extra de espera antes da captura.')
    args = parser.parse_args()

    width, height = args.viewport
    target_url = normalize_target(args.url)
    output_path = args.output
    if not output_path.is_absolute():
        output_path = PROJECT_ROOT / output_path
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': width, 'height': height})
        page.goto(target_url, wait_until='networkidle')
        page.wait_for_timeout(args.wait_ms)
        page.screenshot(path=str(output_path), full_page=args.full_page)
        browser.close()

    print(f'Screenshot salva em: {output_path}')


if __name__ == '__main__':
    main()