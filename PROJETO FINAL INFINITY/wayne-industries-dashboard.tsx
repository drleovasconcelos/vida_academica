<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Indústrias Wayne</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Indústrias Wayne</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="dashboard.html">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="inventory.html">Inventário</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="access-control.html">Controle de Acesso</a>
                    </li>
                </ul>
            </div>
            <button id="logout-btn" class="btn btn-outline-light">Sair</button>
        </div>
    </nav>

    <div class="container mt-4">
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title">Alertas de Segurança</h5>
                        <p id="security-alerts" class="card-text display-4">Carregando...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title">Usuários Ativos</h5>
                        <p id="active-users" class="card-text display-4">Carregando...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title">Status do Inventário</h5>
                        <p id="inventory-status" class="card-text display-4">Carregando...</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title">Recursos</h5>
                        <canvas id="resources-chart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title">Atividades Recentes</h5>
                        <ul id="recent-activities" class="list-group list-group-flush">
                            <li class="list-group-item bg-secondary">Carregando...</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script src="js/dashboard.js"></script>
</body>
</html>
