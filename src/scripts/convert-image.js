import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs/promises';
import path from 'path';


async function getFiles(dir) {
    let files = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(await getFiles(fullPath));
        } else {
            files.push(fullPath);
        }
    }

    return files;
}


async function convertImages() {
    try {
        const imgDir = 'src/assets/img';
        console.log(`Iniciando la conversión de imágenes a formato WebP en el directorio: ${imgDir}`);

        const filesToConvert = await getFiles(imgDir);
        const imageFiles = filesToConvert.filter(file =>
            /\.(jpg|png)$/i.test(file)
        );

        for (const file of imageFiles) {
            await imagemin([file], {
                destination: path.dirname(file), // Mantener la misma carpeta
                plugins: [
                    imageminWebp({
                        quality: 75
                    })
                ]
            });

            // Eliminar la imagen original después de la conversión
            await fs.unlink(file);
            console.log(`Imagen original eliminada: ${file}`);
        }

        console.log('¡Conversión de imágenes completada con éxito!');
    } catch (error) {
        console.error('Error al convertir imágenes:', error);
    }
}

convertImages();