@echo off
title Git Auto Push

echo ===============================
echo      Phantom-API Auto Push
echo ===============================
echo.

set /p msg=Mensagem do commit: 

if "%msg%"=="" set msg=Update documentation

echo.
echo [1/4] Adicionando arquivos...
git add .

echo.
echo [2/4] Criando commit...
git commit -m "%msg%"

echo.
echo [3/4] Atualizando repositorio...
git pull --rebase origin main

if errorlevel 1 (
    echo.
    echo ===========================================
    echo ERRO: Houve um conflito durante o rebase.
    echo Resolva os conflitos e execute novamente.
    echo ===========================================
    pause
    exit /b
)

echo.
echo [4/4] Enviando para o GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ===========================================
    echo Falha ao enviar.
    echo Verifique as mensagens acima.
    echo ===========================================
) else (
    echo.
    echo ===========================================
    echo Push realizado com sucesso!
    echo ===========================================
)

pause