# film-explorer

Desafio: Crie um aplicativo web usando o Node.js que permita aos usuários pesquisar e visualizar informações sobre filmes. O aplicativo deve se integrar com uma API de filmes (por exemplo, a API do IMDb) para obter os dados necessários. O usuário poderá pesquisar por título de filme e visualizar detalhes como o título, ano de lançamento, classificação e descrição do filme.

Passos para realizar o desafio:

1. Configuração:

    - Certifique-se de ter o Node.js instalado em sua máquina.
    - Crie uma nova pasta para o projeto e inicialize um novo projeto Node.js usando npm init.
2. Configuração do servidor:

    - Crie um arquivo JavaScript (por exemplo, server.js) e configure um servidor HTTP utilizando o módulo http ou um framework web como o Express.js.
    - Configure as rotas para lidar com as solicitações do cliente.
3. Integração com a API de filmes:

    - Pesquise e escolha uma API de filmes que forneça os dados necessários (por exemplo, a API do IMDb, a API do The Movie Database, etc.).
    - Utilize módulos de solicitação HTTP como o axios para fazer solicitações para a API de filmes e obter os dados desejados.
4. Rota de pesquisa:

    - Crie uma rota no servidor que aceite as solicitações de pesquisa de filmes enviadas pelo cliente.
    - Utilize os dados da solicitação para fazer a chamada correta à API de filmes e obter os resultados da pesquisa.
    - Envie os resultados de volta ao cliente.
5. Rota de visualização de detalhes:

    - Crie uma rota no servidor que aceite as solicitações de visualização de detalhes de um filme específico.
    - Utilize os dados da solicitação para fazer a chamada correta à API de filmes e obter os detalhes do filme desejado.
    - Envie os detalhes do filme de volta ao cliente.
6. Interface do usuário:

    - Crie uma interface do usuário usando HTML, CSS e JavaScript para permitir que os usuários pesquisem filmes e visualizem os resultados e detalhes.
    - Utilize um formulário para a pesquisa de filmes e exiba os resultados em uma lista.
    - Ao selecionar um filme da lista, exiba os detalhes do filme em uma visualização separada.
7. Teste e implantação:

    - Teste seu aplicativo para garantir que tudo está funcionando corretamente.
    - Implante o aplicativo em um ambiente de produção (como um servidor na nuvem) para que os usuários possam acessá-lo.