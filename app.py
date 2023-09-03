from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('calculator.html')

@app.route('/resultado', methods=['POST'])
def resultado():
    expressao = request.form['expressao']
    try:
        resultado = eval(expressao)
        return f'O resultado é: {resultado}'
    except Exception as e:
        return f'Ocorreu um erro: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)
