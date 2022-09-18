#!/bin/sh
sudo yum -y install epel-release
echo "Inicio da Instalação do Ansible"
sudo yum -y install ansible
cat <<EOT >> /etc/hosts
192.168.56.10 control-node
192.168.56.11 app01
192.168.56.12 db01
EOT