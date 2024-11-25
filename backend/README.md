## Documentação back-end:

1. Configuração do ambiente:
- Adicione suas variáveis de ambiente conforme o arquivo `.env.example`.
- Certifique-se de ter um banco de dados PostgreSQL configurado.
- Instale os requisitos.

No terminal, execute o comando abaixo para instalar todas as dependências listadas no arquivo requirements.txt:
```
pip install -r requirements.txt
```
2. Crie as tabelas no banco de dados:
- Execute os arquivos `create_user_table.py` e `create_car_table.py` para criar as tabelas necessárias no banco:
```
python create_user_table.py
python create_car_table.py
```

3. Inicie o servidor:
- Inicie o servidor localmente com o seguinte comando:
```
python main.py
```

Isso rodará o sistema localmente em http://127.0.0.1:5000.

## Endpoints disponíveis:
1. /signup
Método: POST
Descrição: Registra um novo usuário.
Payload exemplo:
```
{
  "name": "Bia",
  "email": "bia@email.com",
  "password": "senha123"
}
```

Sucesso:
```
{
    "message": "Usuário criado com sucesso!"
}
```
Erro:
```
{
    "message": "Usuário já existe!"
}
```

2. /login
Método: POST
Descrição: Autentica um usuário já registrado.
Payload exemplo:
```
{
  "email": "bia@email.com",
  "password": "senha123"
}
```
Sucesso:
```
{
    "message": "Login realizado com sucesso!"
}
```
Erro:
```
{
    "message": "Credenciais inválidas."
}
```

3. /register
Método: POST
Descrição: Registra um novo veículo.
Payload exemplo:
```
{
  "photo": "https://image1.mobiauto.com.br/images/api/images/v1.0/285628281/transform/fl_progressive,f_webp,q_70,w_592",
  "brand": "Toyota",
  "model": "Corolla Cross",
  "license_plate": "ABC-1234",
  "owner_name": "João Silva",
  "owner_cpf": "45865326148",
  "owner_email": "joao@email.com",
  "owner_phone": "999999999"
}
```
Sucesso:
```
{
    "message": "Carro registrado com sucesso!",
    "payment_receipt_id": "27ea63f3-1943-4c73-836f-9f71f702ea30"
}
```
Erro:
```
{
    "message": "Erro ao registrar o veículo."
}
```

4. /update
Método: PUT
Descrição: Dá baixa em um veículo, alterando seu status para "inativo".
Payload exemplo:
```
{
    "ticket_id": "b62c3a19-8b4d-4b98-8f0b-cb1350400f09"
}
```

Sucesso:
```
{
    "message": "Veículo marcado como inativo com sucesso!"
}
```

Erro:
```
{
    "message": "Veículo não encontrado ou já está inativo."
}
```

## Requisitos:
- Python: Certifique-se de ter o Python instalado no sistema.
- PostgreSQL: Utilize o PgAdmin4 ou outro cliente para acessar o banco de dados.

Banco de Dados:
Database: db_car_manager
Tabelas: users (para gerenciar os usuários) e cars (para gerenciar os veículos).
