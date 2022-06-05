import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

try {
    const currentDirectory = dirname(fileURLToPath(import.meta.url));
    const text = readFileSync(join(currentDirectory, '../uhyo.txt'), {encoding: 'utf8'});

    let count = 0;
    let position = text.indexOf('uhyo');

    while (position !== -1) {
        count++;
        position = text.indexOf('uhyo', position + 4);
    }

    console.log(count);

} catch(err) {
    console.error(err);
}