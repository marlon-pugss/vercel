from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Bem-vindo ao Meu Site Simples</h1>'

@app.route('/sobre')
def sobre():
    return '<h2>Sobre</h2><p>Este é um exemplo de um site simples criado em Python com Flask.</p>'

if __name__ == '__main__':
    app.run(debug=True)
