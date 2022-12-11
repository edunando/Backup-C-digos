#!/bin/bash
mkdir /home/${USER}/arquivos
while IFS=: read -r f1 f2 f3 f4 f5 f6 f7
do
	mkdir "/home/${USER}/arquivos/$f1"
	echo $f7 > "/home/${USER}/arquivos/$f1/interpretador.txt" ;
done < /etc/passwd

