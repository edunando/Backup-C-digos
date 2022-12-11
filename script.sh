#!/bin/bash

while true;do
	echo -e "\nOlá, Seja bem vindo!, ${USER}!\n"
	echo "Programinha Multifuncional By Nic :3"
	echo -e "Escolha uma das opções a seguir:\n"
	
	echo "a) Selecione um diretório."
	echo "b) Gerar N frases aleatórias"
    echo "c) Exibir os arquivos do diretório"
	echo "d) Exibir os subdiretórios deste diretório."
	echo "e) Exibir os executáveis deste diretório."
	echo "f) Renomear todos os arquivos deste diretório colocando todas as letras maiúsculas."
	echo "g) Renomear todos os arquivos deste diretório colocando todas as letras minusculas"
	echo "h) Renomear todos os arquivos com extensão .txt para .docx"
	echo "i) Remover todos os arquivos com 3 linhas ou mais."
	echo "j) Sair do Script."

	read -p "Selecione uma opção: " option

	case $option in
    
		"a")    clear
                read -p "Selecione o caminho do diretório:" dir;;
		"b")    clear
                read -p "Quantas Frases você deseja gerar?" nFrases
		        for m in $(seq 1 $nFrases);do
			        $fortune >> frases.txt
		        done
		        echo "$nFrases geradas para o arquivo frases :)";;
		"c")    clear
                for arqv in $(ls $dir);do
			        if [ -f $arqv ];then
				        echo $arqv
			        fi
		        done;;
	    "d")    clear
                tree -d $dir;;
		"e")    clear
                for arqv in $(ls $dir);do
			        if [ -x $arqv ];then
				        echo $arqv
			        fi
		        done;;
	    "f")    clear
                for i in $(ls $dir);do
	                ArqvName=$( echo $i | sed 's/^.*$/\U&/')
	                mv $i $ArqvName
                done;;
        "g")    clear
                for i in $(ls $dir);do
	                ArqvName=$( echo $i | sed 's/^.*$/\L&/')
	                mv $i $ArqvName
                done;;
        "h")    clear
                for arqv in $(ls -1 $dir | grep .txt); do
                    mv $arqv $(echo $arqv | awk -F. '{print $1".docx"}');
                done;;
        "i")    clear
                for arqv in $(ls); do
                    cont=$(cat $arqv | wc -l)
                    if [ $cont -gt 3 ] && [ -f $arqv ];then
                        rm $arqv
                    fi
                done;;
        "j")    echo "Programa encerrado. Até mais!"
                exit;;
    esac
done
