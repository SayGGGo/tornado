from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route("/")
def index():
    with open("menu.json", "r", encoding="utf-8") as file:
        menu = json.load(file)
    categories = {}
    for item in menu:
        category_name = item["category"]
        if category_name not in categories:
            categories[category_name] = []
        categories[category_name].append(item)

    category_names_list = list(categories.keys())

    return render_template("index.html", title="Главная страница", categories=categories,
                           category_names=category_names_list)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html', error="Страница не найдена", title="404")


@app.errorhandler(500)
def page_not_found(e):
    return render_template('error.html', error="Ошибка сервера", title="500")


if __name__ == "__main__":
    app.run(debug=True)