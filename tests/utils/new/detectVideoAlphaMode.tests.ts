// note: needs checking, failing - was render port correct? Check original test
// import { RenderTexture } from '../../../src/rendering/renderers/shared/texture/RenderTexture';
// import { VideoSource } from '../../../src/rendering/renderers/shared/texture/sources/VideoSource';
// import { Texture } from '../../../src/rendering/renderers/shared/texture/Texture';
// import { Sprite } from '../../../src/scene/sprite/Sprite';
// import { detectVideoAlphaMode } from '../../../src/utils/browser/detectVideoAlphaMode';
// import { getRenderer } from '../getRenderer';

// import type { WebGLRenderer } from '../../../src/rendering/renderers/gl/WebGLRenderer';

// describe('detectVideoAlphaMode', () =>
// {
//     it('should detect the correct alpha mode for video textures', async () =>
//     {
//         const video = document.createElement('video');

//         video.autoplay = false;
//         video.crossOrigin = 'anonymous';
//         video.preload = 'auto';
//         video.src = URL.createObjectURL(new Blob([new Uint8Array([
//             0x1A, 0x45, 0xDF, 0xA3, 0x9F, 0x42, 0x86, 0x81, 0x01, 0x42, 0xF7, 0x81, 0x01, 0x42, 0xF2, 0x81,
//             0x04, 0x42, 0xF3, 0x81, 0x08, 0x42, 0x82, 0x84, 0x77, 0x65, 0x62, 0x6D, 0x42, 0x87, 0x81, 0x02,
//             0x42, 0x85, 0x81, 0x02, 0x18, 0x53, 0x80, 0x67, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xD3,
//             0x11, 0x4D, 0x9B, 0x74, 0xBA, 0x4D, 0xBB, 0x8B, 0x53, 0xAB, 0x84, 0x15, 0x49, 0xA9, 0x66, 0x53,
//             0xAC, 0x81, 0xA1, 0x4D, 0xBB, 0x8B, 0x53, 0xAB, 0x84, 0x16, 0x54, 0xAE, 0x6B, 0x53, 0xAC, 0x81,
//             0xC6, 0x4D, 0xBB, 0x8C, 0x53, 0xAB, 0x84, 0x12, 0x54, 0xC3, 0x67, 0x53, 0xAC, 0x82, 0x01, 0x17,
//             0x4D, 0xBB, 0x8C, 0x53, 0xAB, 0x84, 0x1C, 0x53, 0xBB, 0x6B, 0x53, 0xAC, 0x82, 0x01, 0xBD, 0xEC,
//             0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x59, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x15, 0x49, 0xA9, 0x66, 0xA0, 0x2A, 0xD7, 0xB1, 0x83, 0x0F, 0x42, 0x40, 0x4D, 0x80, 0x84,
//             0x4C, 0x61, 0x76, 0x66, 0x57, 0x41, 0x84, 0x4C, 0x61, 0x76, 0x66, 0x44, 0x89, 0x88, 0x40, 0x8F,
//             0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x54, 0xAE, 0x6B, 0xCC, 0xAE, 0x01, 0x00, 0x00, 0x00,
//             0x00, 0x00, 0x00, 0x43, 0xD7, 0x81, 0x01, 0x73, 0xC5, 0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
//             0x00, 0x01, 0x9C, 0x81, 0x00, 0x22, 0xB5, 0x9C, 0x83, 0x75, 0x6E, 0x64, 0x88, 0x81, 0x00, 0x86,
//             0x85, 0x56, 0x5F, 0x56, 0x50, 0x39, 0x83, 0x81, 0x01, 0x23, 0xE3, 0x83, 0x84, 0x3B, 0x9A, 0xCA,
//             0x00, 0xE0, 0x94, 0xB0, 0x81, 0x02, 0xBA, 0x81, 0x02, 0x9A, 0x81, 0x02, 0x53, 0xC0, 0x81, 0x01,
//             0x55, 0xB0, 0x84, 0x55, 0xB9, 0x81, 0x01, 0x12, 0x54, 0xC3, 0x67, 0xD5, 0x73, 0x73, 0xD2, 0x63,
//             0xC0, 0x8B, 0x63, 0xC5, 0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x67, 0xC8, 0x9C,
//             0x45, 0xA3, 0x87, 0x45, 0x4E, 0x43, 0x4F, 0x44, 0x45, 0x52, 0x44, 0x87, 0x8F, 0x4C, 0x61, 0x76,
//             0x63, 0x20, 0x6C, 0x69, 0x62, 0x76, 0x70, 0x78, 0x2D, 0x76, 0x70, 0x39, 0x67, 0xC8, 0xA2, 0x45,
//             0xA3, 0x88, 0x44, 0x55, 0x52, 0x41, 0x54, 0x49, 0x4F, 0x4E, 0x44, 0x87, 0x94, 0x30, 0x30, 0x3A,
//             0x30, 0x30, 0x3A, 0x30, 0x31, 0x2E, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x00,
//             0x00, 0x1F, 0x43, 0xB6, 0x75, 0xC7, 0xE7, 0x81, 0x00, 0xA0, 0xC2, 0xA1, 0xA0, 0x81, 0x00, 0x00,
//             0x00, 0x82, 0x49, 0x83, 0x42, 0x00, 0x00, 0x10, 0x00, 0x16, 0x00, 0x38, 0x24, 0x1C, 0x18, 0x4A,
//             0x00, 0x00, 0x20, 0x20, 0x00, 0x11, 0xBF, 0xFF, 0xFF, 0x8A, 0xFE, 0x00, 0x00, 0x75, 0xA1, 0x9D,
//             0xA6, 0x9B, 0xEE, 0x81, 0x01, 0xA5, 0x96, 0x82, 0x49, 0x83, 0x42, 0x00, 0x00, 0x10, 0x00, 0x16,
//             0x00, 0x38, 0x24, 0x1C, 0x18, 0x4A, 0x00, 0x00, 0x20, 0x20, 0x00, 0x48, 0x40, 0x1C, 0x53, 0xBB,
//             0x6B, 0x91, 0xBB, 0x8F, 0xB3, 0x81, 0x00, 0xB7, 0x8A, 0xF7, 0x81, 0x01, 0xF1, 0x82, 0x01, 0x71,
//             0xF0, 0x81, 0x03
//         ])], { type: 'video/webm' }));

//         const source = new VideoSource({ resource: video });

//         await source.load();

//         const texture = new Texture(source);

//         texture.source.alphaMode = await detectVideoAlphaMode();

//         const sprite = new Sprite(texture);
//         const renderer = await getRenderer({ width: 1, height: 1 }) as WebGLRenderer;
//         const gl = renderer.gl;
//         const renderTexture = RenderTexture.create({ width: 1, height: 1 });

//         renderer.render(sprite, { renderTexture });
//         renderer.renderTarget.bind(renderTexture);

//         const pixel = new Uint8Array([0x00, 0x40, 0x80, 0xFF]);

//         gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);

//         expect(pixel[0]).toBeWithin(120, 135);
//         expect(pixel[1]).toBeWithin(120, 135);
//         expect(pixel[2]).toBeWithin(120, 135);
//         expect(pixel[3]).toBeWithin(120, 135);

//         renderTexture.destroy(true);
//         renderer.destroy();
//         source.destroy();
//         URL.revokeObjectURL(video.src);
//     });
// });
