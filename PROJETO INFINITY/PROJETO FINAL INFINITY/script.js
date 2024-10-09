// Scripts para manipular recursos e controle de acesso

// Simulando manipulação de recursos
document.getElementById('resourceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const resourceName = document.getElementById('resource-name').value;
    const resourceDescription = document.getElementById('resource-description').value;

    const resourceList = document.getElementById('resource-list');
    const newResource = document.createElement('div');
    newResource.innerHTML = `<h3>${resourceName}</h3><p>${resourceDescription}</p>`;
    resourceList.appendChild(newResource);
});

// Simulando controle de acessos
