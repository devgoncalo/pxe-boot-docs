"use client";

import {
  ArrowRight,
  ArrowLeft,
  Notepad,
  TestTube,
  HardDrives,
  Footprints,
} from "@phosphor-icons/react";
import Code from "@/components/Code";
import Warnings from "@/components/Warnings";
import Questions from "@/components/Questions";
import Infos from "@/components/Infos";
import Checks from "@/components/Checks";

export default function Phase2() {
  return (
    <>
      <div className="mt-16 flex flex-col">
        <div className="flex items-center gap-3">
          <HardDrives size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-3xl font-medium text-gray-50">
            CONFIGURAÇÃO DO SERVIDOR
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Algumas Notas antes de Começar
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Agora vamos configurar a Raspberry servidor. Esta é a máquina que vai
          servir o cliente com os ficheiros necessários para a incialização,
          como o Kernel e o sistema operativo. Aqui vão algumas notas antes de
          começar:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Notepad size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">/notas</span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Se estiver a usar dois cartões SD, certifique-se de instalar o
            Raspbian também nesse segundo cartão. Siga as instruções anteriores
            se tiver dúvidas.
          </li>
          <li>
            Algumas das etapas iniciais de configuração do servidor já lhe serão
            familiares.
          </li>
          <li>
            Deve certificar-se que conecta o servidor a uma rede internet.
            Precisamos da conexão com a internet para atualizar e instalar
            pacotes necessários.
          </li>
          <li>
            Mais tarde, nesta fase, vamos remover o servidor do acesso à
            internet e conectá-lo diretamente á nossa máquina cliente.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Atualizar e Instalar Pacotes Necessários
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Para começar, temos de preparar o servidor para a sua configuração.
          Vamos ter de instalar alguns pacotes como o rpi-eeprom, rsync, dnsmasq
          e fazer algumas atualizações.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Atualize o Raspbian com o comando <kbd>`apt-get`</kbd> e instale o
            pacote <kbd>`rpi-config`</kbd>. Observe que esta etapa pode demorar
            algum tempo, este pode e irá variar de acordo com a velocidade da
            sua internet.
          </li>
          <Code>
            sudo apt-get update
            <br />
            sudo apt-get full-upgrade
            <br />
            sudo apt-get install rpi-eeprom
          </Code>

          <li>
            Agora, instale o <kbd>`rsync`</kbd>, <kbd>`dnsmasq`</kbd> e o{" "}
            <kbd>`nfs`</kbd>. Vamos usar o <kbd>`rsync`</kbd> para fazer uma
            cópia do sistema operativo base e o <kbd>`dnsmasq`</kbd> como
            servidor DHCP e TFTP. Já o NFS será usado para expor o sistema de
            arquivos raiz para o cliente.
          </li>
          <Questions>
            Network File System é um protocolo de sistema de arquivos, este
            permite que um utilizador em um computador cliente aceda a arquivos
            através de uma rede de computadores da mesma maneiro que um
            armazenamento local é acedido.
          </Questions>
          <Code>sudo apt-get install rsync dnsmasq nfs-kernel-server</Code>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Diretórios de Inicialização e Sistema de Arquivos
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          O nosso servidor necessita de um sistema de arquivos completo e
          funcional seguido de uma estrutura para a nossa inicalização ser bem
          sucessida. Afinal de contas dirétorios são a <strong>base</strong> dos
          sistemas Linux.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Vamos criar os diretórios <kbd>`nfs`</kbd> e <kbd>`tftpboot`</kbd>.
            O diretório <kbd>`/nfs/client1`</kbd> será a raiz do sistema de
            arquivos do seu cliente.
          </li>
          <Infos>
            Se quiser adicionar mais clientes, precisará de adicionar mais
            diretórios raiz. O diretório `/tftpboot` será usado por todos os
            seus clientes que arranquem via netbooting.
          </Infos>
          <li>
            Crie o diretório que vai conter o BootLoader e os arquivos
            necessários para inicializar o sistema:
          </li>
          <Code>
            sudo mkdir -p /nfs/client1
            <br />
            sudo mkdir -p /tftpboot
            <br />
            sudo chmod 777 /tftpboot
          </Code>
          <li>
            Copie o sistema de arquivos do sistema operativo da sua Raspberry
            para o seu diretório <kbd>`/nfs/client1`</kbd>. Mas antes vamos
            excluir alguns arquivos com o <kbd>`rsync`</kbd>.
          </li>
          <Warnings>
            Esta é uma medida preventiva no caso de executar este comando
            novamente depois de configurar a rede e o `dnsmasq`. Este comando
            leva algum tempo consoante as características do cartão SD.
          </Warnings>
          <Code>
            sudo rsync -xa --progress --exclude /nfs/client1 \<br />
            --exclude /etc/systemd/network/10-eth0.netdev \<br />
            --exclude /etc/systemd/network/11-eth0.network \<br />
            --exclude /etc/dnsmasq.conf \<br />/ /nfs/client1
          </Code>

          <li>
            Agora vamos usar a ferramenta <kbd>`chroot`</kbd> para mudar o root
            para desse diretório. Mas antes de usarmos o <kbd>`chroot`</kbd>,
            precisamos de montar os sistemas de arquivos virtuais necessários no
            diretório do cliente base.
          </li>
          <Questions>
            Change Root é um comando e um conceito em sistemas operativos
            baseados em Unix que permite alterar o diretório raiz para um
            determinado processo ou conjunto de processos.
          </Questions>
          <li>
            Uma vez no <kbd>`chroot`</kbd>, excluímos as chaves SSH do servidor.
            Em seguida, reconfiguramos o pacote do servidor <kbd>`openssh`</kbd>{" "}
            que irá regenerar as chaves. Além disso, habilitamos o servidor{" "}
            <kbd>`ssh`</kbd> para que possamos fazer login remotamente quando o
            cliente ficar online.
          </li>
          <Code>
            cd /nfs/client1
            <br />
            sudo mount --bind /dev dev
            <br />
            sudo mount --bind /sys sys
            <br />
            sudo mount --bind /proc proc
            <br />
            sudo chroot . rm /etc/ssh/ssh_host_*
            <br />
            sudo chroot . dpkg-reconfigure openssh-server
            <br />
            sudo chroot . systemctl enable ssh
            <br />
            sudo umount dev sys proc
          </Code>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Configurar o IP Estático do Servidor
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          O nosso servidor PXE é um servidor DHCP, ou seja, atribui endereços IP
          e configuração de rede aos clientes que os solicitam. Neste caso, o
          nosso cliente. Se não quisermos que o próprio servidor de
          inicialização PXE execute o cliente DHCP, devemos desátiva-lo. Vamos
          fazer isso agora.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Criamos um novo arquivo <kbd>`systemd`</kbd> para desativar o
            cliente DHCP em <kbd>`eth0`</kbd>.
          </li>
          <li>
            Crie o arquivo no seguinte caminho:{" "}
            <kbd>`/etc/systemd/network/10-eth0.netdev`</kbd> com o seguinte
            conteúdo:
          </li>
          <Code>
            <span className="text-green-600">[Match]</span>
            <br />
            Name=eth0
            <br />
            <span className="text-green-600">[Network]</span>
            <br />
            DHCP=no
          </Code>

          <li>
            Crie outro arquivo no seguinte caminho:
            <kbd>`/etc/systemd/network/11-eth0.network`</kbd> com o seguinte
            conteúdo:
          </li>
          <Code>
            <span className="text-green-600">[Match]</span>
            <br />
            Name=eth0
            <br />
            <span className="text-green-600">[Network]</span>
            <br />
            Address=192.168.2.100/24
            <br />
            DNS=192.168.2.1
            <br />
            Gateway=192.168.2.1
            <br />
          </Code>
          <Infos>
            Observe que estamos a especificar `192.168.2.1` como o servidor DNS
            e o endereço do gateway. Nesta documentação, não temos um gateway ou
            servidor DNS nesse endereço. Aliás não precisamos de um agora.
            Usamos apenas para fim de testes e depuração. Pode deixar o DNS e o
            Gateway de fora, se preferir.
          </Infos>

          <li>
            Agora vamos desativar o serviço de cliente <kbd>`dhcp`</kbd>,{" "}
            <kbd>`dhcpcd`</kbd> que é ativado por base no Raspbian.
          </li>
          <Warnings>
            Por favor, preste atenção ao facto de que é `dhcpcd` e não `dhcpd`.
            O primeiro é um cliente DHCP e o segundo um servidor.
          </Warnings>
          <Code>
            sudo systemctl stop dhcpcd
            <br />
            sudo systemctl disable dhcpcd
          </Code>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Configuração do DNSMasq do Servidor
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Neste passo configuramos a nossa máscara DNS ou DNSMasq para suportar
          a inicialização por PXE, siga os passos cuidadosamente.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Substitua o arquivo <kbd>`/etc/dnsmasq.conf`</kbd> pelo seguinte
            conteúdo:
          </li>

          <Code>
            interface=eth0
            <br />
            no-hosts
            <br />
            dhcp-range=192.168.2.101,192.168.2.200,12h
            <br />
            log-dhcp
            <br />
            enable-tftp
            <br />
            tftp-root=/tftpboot
            <br />
            pxe-service=0,"Raspberry Pi Boot"
            <br />
          </Code>

          <li>
            Em seguida, copiamos os arquivos de inicialização do nosso diretório{" "}
            <kbd>`/boot`</kbd> para o diretório <kbd>`tftpboot`:</kbd>.
          </li>
          <Code>sudo cp -r /boot/* /tftpboot/</Code>

          <li>
            Agora vamos habilitar o <kbd>`systemd-networkd`</kbd> e o{" "}
            <kbd>`dnsmasq`</kbd>. Reinicie o <kbd>`dnsmasq`</kbd> para confirmar
            se a configuração é válida.
          </li>
          <Code>
            sudo systemctl enable systemd-networkd
            <br />
            sudo systemctl enable dnsmasq.service
            <br />
            sudo systemctl restart dnsmasq.service
          </Code>
          <li>
            Finalmente, reinicie o servidor e certifique-se de que a Raspberry
            vem com a rede configurada corretamente.
          </li>
          <Code>sudo reboot</Code>
          <li>
            Agora devemos atualizar o arquivo <kbd>`cmdline.txt`</kbd> em{" "}
            <kbd>`/tftpboot`</kbd>. Este arquivo contém os parâmetros do Kernel
            que são passados para o nosso cliente no momento da inicialização.
          </li>
          <li>
            Abre com um editor de texto o arquivo{" "}
            <kbd>`/tftpboot/cmdline.txt`</kbd>:
          </li>
          <Code>suno nano /tftpboot/cmdline.txt</Code>
          <li>Substitua o conteúdo do ficheiro para:</li>
          <Code>
            console=serial0,115200 console=tty1 root=/dev/nfs
            nfsroot=192.168.2.100:/nfs/client1,vers=3 rw ip=dhcp rootwait
            elevator=deadline
          </Code>

          <Warnings>
            A edição acima é feita em apenas uma linha certifique-se que o
            digita os parâmetros todos corretamente em uma e uma só linha senão
            poderá originar erros.
          </Warnings>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Configurar as Exportações do NFS
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Nesta etapa vamos configurar as exportações do NFS. As exportações são
          sistemas de arquivos que são compartilhados ou exportados via NFS (Net
          File System).
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Para efetuarmos as alterações necessárias e configurar o serviço{" "}
            <kbd>`/etc/exports`</kbd> apenas temos de adicionar o conteúdo
            seguinte ao ficheiro:
          </li>
          <Code>
            /nfs/client1 *(rw,sync,no_subtree_check,no_root_squash)
            <br />
            /tftpboot *(rw,sync,no_subtree_check,no_root_squash)
          </Code>
          <li>
            Precisamos de reiniciar o serviço para as alterações serem efetuadas
            corretamente. Mas como no fim da configuração do servidor vamos
            reiniciar a Raspberry e os serviços relacionados ao NFS, não
            precisamos de fazer isso agora.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Configurarar o FSTAB para Montar via NFS
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          O último passo é modificar o arquivo `/etc/fstab` no sistema de
          arquivos do nosso cliente. Isso dirá ao cliente para montar o seu
          volume raiz fora do servidor NFS, e montar no nosso servidor de
          inicialização PXE.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /passo/a/passo
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Coloque o seguinte contéudo em <kbd>`/nfs/client1/etc/fstab`</kbd>:
          </li>
          <Code>
            proc /proc proc defaults 0 0<br />
            192.168.2.100:/tftpboot /boot nfs defaults,vers=3 0 0
          </Code>

          <li>
            Finalmente, habilite e reinicie os serviços relacionados ao NFS:
          </li>
          <Code>
            sudo systemctl enable rpcbind
            <br />
            sudo systemctl restart rpcbind
            <br />
            sudo systemctl enable nfs-kernel-server
            <br />
            sudo systemctl restart nfs-kernel-server
          </Code>

          <Checks>
            Recomendamos reinicializar o servidor para uma última verificação.
            Veja também os logs do sistema e os status dos serviços com o
            comando `systemctl` para ver se tudo está operacional e sem erros.
          </Checks>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Testes Finais no Servidor
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Chegamos ao fim da configuração do servidor. Esperamos que tenha
          aprendido novos conceitos ao longo desta documentação. Pporém, ainda
          temos que ver o nosso trabalho a funcionar certo? Aqui vai o teste
          final.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <TestTube size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /testes/finais
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Conecte o cliente Raspberry Pi à rede ou diretamente ao servidor via
            ethernet no nosso caso usamos um Switch para estabelecer a conexão.
          </li>
          <li>
            Agora conecte um teclado e um ecrã LCD ao seu cliente. Ligue-o e
            aguarde.
          </li>
          <li>
            Esperamos que veja a máquina a arrancar dentro de alguns momentos.
          </li>
          <Infos>
            Se o resultado não tiver sido o esperado tenha calma, preparamos um
            guia no passo seguinte de TroubleShooting e como detetar erros que
            foram feitos ao longo deste processo, recomendamos antes reler os
            passos e ver se não deixou nada de fora.
          </Infos>
        </ul>
        <hr className="mt-1 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase1"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Configuração do Cliente
        </a>
        <a
          href="/phase3"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          TroubleShooting
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
