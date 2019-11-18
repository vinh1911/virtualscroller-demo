import * as faker from 'faker';
export const users = Array(100)
    .fill(1)
    .map(_ => {
        return {
            name: faker.name.findName(),
            image: faker.image.avatar(),
            text: faker.lorem.paragraph()
        };
    });
