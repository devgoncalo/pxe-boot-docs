"use client";

import {
  ArrowRight,
  X,
  ArrowLeft,
  Sparkle,
  Desktop,
  Footprints,
  LinuxLogo,
  Notepad,
  WindowsLogo,
} from "@phosphor-icons/react";

import Code from "@/components/Code";
import Warnings from "@/components/Warnings";
import Infos from "@/components/Infos";
import Questions from "@/components/Questions";

export default function Phase1() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Desktop size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-xl font-medium text-gray-50 md:text-3xl">
            CONFIGURAÇÃO DO CLIENTE
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
          Vamos agora configurar a Raspberry cliente para inicialização. Este é
          o Raspberry que eventualmente inicializará sem um cartão micro SD
          inserido mas primeiro vamos precisar de um para fazer algumas
          configurações. Aqui vão algumas notas antes de começar:
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
            Apenas vamos utilizar o cartão SD para configurar, o bootloader para
            inicializar via PXE, ou seja para a sua primeira requisição ser por
            rede e não pela unidade de armazenamento.
          </li>
          <li>
            Certifique-se de ter uma conexão de rede estável na Raspberry para
            garantir o download adequado dos arquivos de inicialização durante o
            processo de configuração.
          </li>
          <li>
            Durante a configuração, será necessário acessar as configurações de
            inicialização do Raspberry Pi e definir o endereço IP do servidor
            PXE e outras configurações.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Instalação do Raspbian com o Raspberry Pi Imager
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          O Raspberry Pi Imager é a maneira mais rápida e fácil de instalar o
          Raspbian e outras distribuições em um cartão microSD. A nossa
          explicação abrange os 2 sistemas operativos principais.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <WindowsLogo size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">/windows</span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Descarregue e instale o Raspberry Pi Imager no seu computador
            Windows.
          </li>
        </ul>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <LinuxLogo size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">/linux</span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Instale o Raspberry Pi Imager no seu computador Linux com o seguinte
            comando:
          </li>
          <Code>sudo apt install rpi-imager</Code>
        </ul>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Conecte um leitor de cartões SD ao computador.</li>
          <li>
            Coloque o cartão SD que vai usar com seu Raspberry Pi Cliente.
          </li>
          <li>
            Selecione a ditribuição Raspbian que desejar, nós usamos a versão
            gráfica mas recomendamos a Lite por ser mais leve.
          </li>
          <li>
            Escolha a unidade de armazenamento que vai escrever a imagem, neste
            caso o cartão SD inserido.
          </li>
          <Warnings>
            Este passo substituirá os dados no dispositivo especificado.
            Verificação tripla que está a escrever para o cartão SD e não para a
            unidade do seu computador!
          </Warnings>
          <li>
            Por fim, clique "write", e aguarde que a imagem seja escrita no
            cartão, pode demorar algum tempo devido ás especificações do cartão
            usado.
          </li>
          <Infos>
            Assista ao{" "}
            <a
              className="text-blue-600"
              href="https://www.youtube.com/watch?v=ntaXWS8Lk34&ab_channel=RaspberryPi"
              target="_blank"
            >
              vídeo
            </a>{" "}
            oficial da documentação da Raspberry se ainda tiver dúvidas mesmo
            depois da nossa explicação.
          </Infos>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Configuração do BootLoader no Cliente
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Precisamos de configurar o BootLoader na nossa RaspBerry Cliente para
          aceitar a inicialização via Pxe, Para isso temos de seguir uma ordem
          de parâmetros para que a inicialização ocorra corretamente e como
          desejamos. Siga atentamente os passos a seguir.
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
            Os comandos seguintes iram alterar e visualizar propriedades da
            placa mãe da Raspberry teremos por isso inicar a consola em{" "}
            <kbd>`sudo bash`</kbd> da seguinte forma:
          </li>
          <Code>sudo bash</Code>
          <Questions>
            Sudo Bash, é uma solitação de execução do shell bash com permissões
            elevadas. É útil para executar comandos que exigem privilégios de
            super-utilizador, como instalação de software ou modificações no
            sistema. Neste caso sem estar em `sudo bash` o comando `sudo` apenas
            não iria suprimir as nossas necessidades.
          </Questions>
          <li>
            Vamos examinar a configuração default do BootLoader, execute este
            comando:
          </li>
          <Code>vcgencmd bootloader_config</Code>
          <li>Aqui está a saída no nosso Raspberry Pi 4 novinho em folha:</li>
          <Code>
            pi@raspberrypi:~ $ vcgencmd bootloader_config
            <br />
            BOOT_UART=0
            <br />
            WAKE_ON_GPIO=1
            <br />
            POWER_OFF_ON_HALT=0
            <br />
            FREEZE_VERSION=0
          </Code>
          <li>
            Precisamos de modificar a configuração do BootLoader para
            inicializar por rede, para isso iremos usar e alterar o parâmetro{" "}
            <kbd>`BOOT_ORDER`</kbd>. Primeiro, é preciso extraí-lo da imagem da
            EEPROM, fazer algumas alterações e voltar a instalá-lo. Podemos
            fazer isso da seguinte forma:
          </li>
          <li>
            Vá para o diretório onde os arquivos do BootLoader estão
            armazenados:
          </li>
          <Code>cd /lib/firmware/raspberrypi/bootloader/beta/</Code>
          <li>
            Faça uma cópia da imagem do sistema operativo mais recente. No nosso
            caso foi <kbd>`pieeprom-2023-05-11.bin`</kbd>:
          </li>
          <Code>cp pieeprom-2023-05-11.bin new-pieeprom.bin</Code>

          <li>Extraia a configuração do BootLoader da EEPROM:</li>
          <Code>rpi-eeprom-config new-pieeprom.bin {">"} bootconf.txt</Code>

          <li>
            Em <kbd>`bootconf.txt`</kbd>, altere a variável{" "}
            <kbd>`BOOT_ORDER=0x1`</kbd> para <kbd>`BOOT_ORDER=0x21`</kbd>. Como
            estava <kbd>0X1</kbd> significa apenas inicializar a partir do
            cartão SD, <kbd>0x21</kbd> significa tentar inicializar primeiro por
            rede e, em seguida, por cartão SD.
          </li>
          <Code>sudo nano bootconf.txt</Code>
          <Code>
            BOOT_UART=0
            <br />
            WAKE_ON_GPIO=1
            <br />
            POWER_OFF_ON_HALT=0
            <br />
            FREEZE_VERSION=0
            <br />
            BOOT_ORDER=0x21
          </Code>
          <Infos>
            Veja este{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://www.raspberrypi.com/documentation/computers/raspberry-pi.html"
              rel="noreferrer"
            >
              artigo
            </a>{" "}
            oficial da documentação da Raspberry sobre como funciona o
            Bootloader para obter mais detalhes sobre os valores e o que eles
            controlam.
          </Infos>
          <li>
            Agora guarde o novo arquivo bootconf.txt devolta na imagem do
            sistema operativo que copiamos anteriormente:
          </li>
          <Code>
            rpi-eeprom-config --out netboot-pieeprom.bin --config bootconf.txt
            new-pieeprom.bin
          </Code>
          <li>Por fim instale o novo BootLoader:</li>
          <Code>sudo rpi-eeprom-update -d -f ./netboot-pieeprom.bin</Code>
          <Warnings>
            Se tiver algum erro com o comando acima, verifique se o `apt-get
            full-upgrade` foi concluído com sucesso.
          </Warnings>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Desativar a Atualização da EEPROM
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Antes de chegarmos á conclusão da configuração do cliente precisamos
          de desativar a atualização automática da rpi-eeprom do nosso cliente.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <X size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">/desativacao</span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Através de um utilizador do Reddit, descobrimos que o{" "}
            <kbd>`rpi-update`</kbd> atualizará sozinho. O comando{" "}
            <kbd>`rpi-eeprom-update`</kbd> faz isso automaticamente.
          </li>
          <li>
            Considerando o facto que estamos a usar recursos beta, uma
            atualização do sistema pode resetar os valores do BootLoader
            configurados anteriormente e desativar a inicialização PXE.
          </li>
          <li>
            Podemos desativar as atualizações automáticas "ocultando" o{" "}
            <kbd>`rpi-eeprom-update`</kbd> com o comando <kbd>`systemctl`</kbd>:
          </li>
          <Code>sudo systemctl mask rpi-eeprom-update</Code>
          <li>
            Se mais tarde decidir atualizar manualmente a EEPROM pode executar o
            comando <kbd>`rpi-eeprom-update`</kbd> quando desejar, que a
            atualização será bem sucedida.
          </li>
          <Infos>
            Consulte este{" "}
            <a
              className="text-blue-600"
              href="https://www.raspberrypi.com/documentation/computers/raspberry-pi.html"
            >
              artigo
            </a>{" "}
            oficial da documentação da Raspberry para saber mais sobre como
            funciona o `rpi-eeprom-update` e como podemos usá-lo.
          </Infos>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Toques Finais no Cliente
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Chegamos ao fim da configuração do cliente, metade do trabalho já está
          feito. O nosso cliente Raspberry Pi já está configurado e preparado
          para a inicialização PXE. Mas antes de desligar a RaspBerry, por
          favor, tome nota do endereço MAC da interface ethernet, veja como pode
          fazer isso:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Sparkle size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /toques/finais
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Execute o comando <kbd>`ip addr show eth0`</kbd> e copie o valor do
            campo <kbd>`link/ether`</kbd>. No nosso caso o endereço MAC foi{" "}
            <kbd>`dc:a6:32:1c:6a:2a`</kbd>.
          </li>
          <Infos>
            O endereço ethernet da placa de rede (MAC) do nosso cliente vai nos
            ser útil mais tarde para verificarmos nas logs se efetivamente a
            Raspberry cliente está a fazer a requisição de rede corretamente.
          </Infos>
          <li>
            Agora desconecte e deixe de lado a sua Raspberry cliente, por
            enquanto. Não vamos precisar mais dela para a configuração do
            servidor.
          </li>
          <li>
            Remova também o cartão SD do cliente, pois não é mais necessário
            agora que a Raspberry vai inicializar através da rede, após o
            servidor estar configurado.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase0"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Introdução
        </a>
        <a
          href="/phase2"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Configuração do Servidor
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
