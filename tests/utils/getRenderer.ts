import { WebGLRenderer } from '../../src/rendering/renderers/gl/WebGLRenderer';

import type { Renderer, RendererOptions } from '../../src/rendering/renderers/types';

export async function getRenderer(options: Partial<RendererOptions> = {}): Promise<Renderer>
{
    const renderer = new WebGLRenderer();

    await renderer.init({
        width: options.width === undefined ? 100 : options.width,
        height: options.height === undefined ? 100 : options.height,
    });

    return renderer;
}
