FROM python:3.10-slim
WORKDIR /app
COPY pyproject.toml poetry.lock ./
RUN pip install poetry && poetry install --no-dev
COPY application/signal_service/ .
COPY domain/ domain/
COPY infrastructure/ infrastructure/
CMD ["python", "signal_engine.py"]
