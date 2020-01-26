const structure = [{
        'folder': true,
        'title': 'Films',
        'children': [{
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [{
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [{
            'folder': true,
            'title': 'EPAM Homework answers',
            'children': null
        }]
    }
];

const rootNode = document.getElementById('root');


const treeBuider = (node) => {
    let rootObj = document.createElement('div');

    for (let i = 0; i < node.length; i++) {
        let item = document.createElement('div');
        let folderImage = document.createElement('i');
        let text = document.createElement('p');

        item.classList.add('item');
        folderImage.classList.add('material-icons');
        text.innerText = node[i].title;

        rootObj.appendChild(item);
        item.appendChild(folderImage);
        item.appendChild(text);

        if (node[i].folder) {
            let folderItems = document.createElement('div');
            folderItems.classList.add('folder_items', 'hide');
            rootObj.appendChild(folderItems);

            folderImage.innerText = 'folder';
            folderImage.classList.add('folder_img');

            item.addEventListener('click', () => {
                if (folderImage.innerText === 'folder') {
                    folderImage.innerText = 'folder_open';
                    folderItems.classList.remove('hide');
                } else {
                    folderImage.innerText = 'folder';
                    folderItems.classList.add('hide');
                }
            });

            if (node[i].children) {
                folderItems.appendChild(treeBuider(node[i].children));
            } else {
                let span = document.createElement('p');
                span.innerText = 'Folder is empty';
                span.classList.add('italic');
                folderItems.appendChild(span);
            }
        } else {
            folderImage.innerText = 'insert_drive_file';
            folderImage.classList.add('file_img');
        }
    }

    return rootObj;
}

rootNode.appendChild(treeBuider(structure));