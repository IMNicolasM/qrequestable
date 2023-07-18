export default {
    "ref": "otherFilesComponent",
    "key": "otherFiles",
    "icon": "fas fa-photo-video",
    "title": "Archivos",
    "allowCounter": true,
    "allowOrder": true,
    "gridColClass": 'col-3 col-md-3 col-lg-4',
    "itemActions": [
        {
            "label": "Descargar",
            "vIf": true,
            "icon": "fas fa-file-download",
            "props": {
                "tag": "a",
                "key": "39740800-35d0-4b28-9610-7f84d96a0145",
                "clickable": true
            }
        },
        {
            "label": "Editar",
            "icon": "fas fa-pen",
            "props": {
                "tag": "a",
                "key": "1df14234-2772-4824-be48-b8f3d9c119e3",
                "clickable": true
            }
        },
        {
            "label": "Copiar enlace",
            "icon": "fas fa-copy",
            "props": {
                "tag": "a",
                "key": "dc3eceff-04a0-47dd-9004-ed2ae4ed1c6e",
                "clickable": true
            }
        },
        {
            "label": "Eliminar",
            "icon": "fas fa-trash",
            "props": {
                "tag": "a",
                "key": "977d2dc9-ac6c-45cd-bb4c-9c3a65795bc6",
                "clickable": true
            }
        }
    ],
    "allowPagination": true,
    "allowChangeView": true,
    "allowSelect": 0,
    "loadFiles": {
        "apiRoute": "apiRoutes.qmedia.files",
        "requestParams": {
            "take": 24,
            "filter": {
                "search": null,
                "folderId": 0,
                "isFolder": false,
                "order": {
                    "field": "created_at",
                    "way": "desc"
                },
                "disk": "publicmedia"
            }
        }
    }
};