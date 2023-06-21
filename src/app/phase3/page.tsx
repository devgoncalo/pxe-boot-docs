"use client";

import Code from "@/components/Code";
import Infos from "@/components/Infos";
import Questions from "@/components/Questions";

import {
  Wrench,
  Bug,
  MagnifyingGlass,
  FlagPennant,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";

export default function Phase3() {
  return (
    <>
      <div className="mt-16 flex flex-col">
        <div className="flex items-center gap-3">
          <Wrench size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-3xl font-medium text-gray-50">TROUBLESHOOTING</h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Ferramentas Gerais de TroubleShooting
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Se estiver a enfrentar problemas, esta secção pode ajudá-lo. A parte
          mais complicada de solucionar problemas desta inicialização é que a
          consola gráfica do cliente não emite nenhuma informação até que o
          Kernel do sistema operativo inicialize. Como resultado, temos de fazer
          toda a solução de problemas através do servidor.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Bug size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /ferramentas/gerais
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Verifique se o <kbd>`dnsmasq`</kbd> está em execução:
          </li>
          <Code>sudo systemctl status dnsmasq.service</Code>
          <li>Veja se a ligação RPC estão em execução:</li>
          <Code>
            sudo systemctl status rpcbind.service 
          </Code>
          <Questions>
            Remote Procedure Call é um mecanismo de comunicação utilizado em
            sistemas Unix, que permitem que um programa em um computador chame
            um procedimento noutro computador, como se estivesse a chamar um
            procedimento local.
          </Questions>
          <li>Verifique se o servidor Net File System está em execução:</li>
          <Code>
            sudo systemctl status nfs-mountd.service
          </Code>
          <li>
            Veja as estatísticas do servidor NFS, o comando também será útil
            para verificar se o cliente está conectado:
          </li>
          <Code>sudo nfsstat</Code>
          <li>
            Faça o <kbd>`tail`</kbd> do arquivo de logs do <kbd>`daemon`</kbd>:
          </li>
          <Infos>
            O comando `tail` é útil para monitorar logs e arquivos de registro,
            pois exibe as últimas linhas adicionadas a um arquivo.
          </Infos>
          <Code>sudo -f /var/log/daemon.log</Code>
          <li>
            Use o <kbd>`tcpdump`</kbd> para rastrear pacotes enviados ou
            recebidos:
          </li>
          <Infos>
            O `tcpdump` é uma ferramenta de captura de pacotes de rede que
            fornece informações detalhadas sobre o tráfego em uma interface
            específica.
          </Infos>
          <Code>tcpdump -n -i eth0</Code>
          <li>
            Use filtros no <kbd>`tcpdump`</kbd> para restringir o rastreamento.
            Por exemplo, para ver apenas o tráfego DHCP de uma porta específica
            (porta 67):
          </li>
          <Code>tcpdump -n -i eth0 port 67</Code>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Em Que Fase poderá estar o erro
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          Caso as ferramentas gerais não o tenham ajudado a encontrar o
          problema, então significa que o seu erro é mais específico. A chave
          para corrigir erros e problemas de inicialização no PXE é descobrir em
          que fase do fluxo de incialização o erro está a acontecer.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <MagnifyingGlass size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /procura/da/fase
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            A primeira pergunta que precisamos de responder é: “Em que fase está
            a falhar?". Existem 3 fases possíveis e estas são:
          </li>
          <li>
            Bootloader DHCP, nesta fase, o erro pode estar relacionado à
            obtenção do endereço IP e à configuração do servidor DHCP.
          </li>
          <li>
            Bootloader TFTP, nesta fase, o erro pode ocorrer durante o download
            dos arquivos de inicialização via TFTP ou ao se comunicar com o
            servidor TFTP.
          </li>
          <li>
            Montagem do Sistema Operativo via NFS, nesta fase, o erro pode estar
            relacionado à montagem dos arquivos a partir do servidor NFS ou à
            comunicação com o servidor NFS.
          </li>
          <Infos>
            Independentemente da fase onde o erro pode estar a ser originado,
            vamos apresentar um guia passo a passo para cada uma em especifico.
          </Infos>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Será na Fase DHCP
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          Se o seu cliente estiver configurado corretamente, ele deve estar a
          fazer uma solicitação DHCP no momento da inicialização. Vamos
          verificar se isso acontece e se o DHCP está a funcionar.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <FlagPennant size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /troubleshooting/fase/dhcp
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Faça o <kbd>`tail`</kbd> do arquivo de logs do <kbd>`daemon`</kbd> e
            ligue o seu cliente:
          </li>
          <Code>sudo -f /var/log/daemon.log</Code>
          <li>
            Vê logs do <kbd>`dnsmasq`</kbd> a indicar que está a receber
            solicitações <kbd>`dhcp`</kbd> para seu cliente? Se sim, o seu
            servidor DHCP está funcionar, o cliente está configurado
            corretamente e a rede entre as duas Raspberrys está funcional.
          </li>
          <li>
            Se não vir nenhuma log do <kbd>`dnsmasq`</kbd> sobre DHCP, a sua
            próxima etapa é provavelmente rastrear o pacote utilizando o comando{" "}
            <kbd>`tcpdump`</kbd>.
          </li>
          <Code>tcpdump -n -i eth0</Code>
          <li>
            Vê tráfego DHCP a vir do cliente? Se sim, o servidor está a
            responder com alguma coisa?
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Será na Fase TFTP
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          Novamente se o seu cliente estiver configurado corretamente, ele deve
          estar a fazer uma solicitação TFTP no momento da inicialização. Vamos
          verificar se isso acontece e se o TFTP está a funcionar.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <FlagPennant size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /troubleshooting/fase/tftp
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Faça o <kbd>`tail`</kbd> do arquivo de logs do <kbd>`daemon`</kbd>{" "}
            todas as requisições do cliente devem estar logadas:
          </li>
          <Code>sudo -f /var/log/daemon.log</Code>
          <li>
            Se o DHCP estiver a funcionar, mas o TFTP não, pode assumir que a
            rede está OK. Caso contrário, o DHCP não iria funcionar.
          </li>
          <li>
            Verifique novamente a configuração e as permissões do TFTP no
            diretório <kbd>`/tftproot`</kbd>.
          </li>
          <li>
            Tente conectar um computador e usar um cliente TFTP para tentar
            conectar-se. O que acontece?
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Será na Montagem do Sistema Operativo via NFS
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          Esta será portanto a nossa última fase onde o seu erro poderá estar.
          Para investigar o problema na montagem do sistema operativo via NFS,
          siga estas etapas:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <FlagPennant size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /troubleshooting/montagem/via/nfs
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Verifique os ficheiros <kbd>`/var/log/daemon.log`</kbd>{" "}
            <kbd>`/var/log/syslog`</kbd> e <kbd>`/var/log/messages`</kbd> e
            procure por pistas:
          </li>
          <Code>
            sudo -f /var/log/daemon.log
            <br />
            sudo -f /var/log/syslog
            <br />
            sudo -f /var/log/messages
          </Code>
          <li>
            Reiniciou os serviços <kbd>`nfs`</kbd> e o serviço{" "}
            <kbd>`rpc-bind`</kbd>?
          </li>
          <li>
            Verifique se há erros de escrita no arquivo{" "}
            <kbd>`/etc/exports`</kbd> o seu contéudo deve ser:
          </li>
          <Code>
            /nfs/client1 *(rw,sync,no_subtree_check,no_root_squash)
            <br />
            /tftpboot *(rw,sync,no_subtree_check,no_root_squash)
          </Code>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Se Ainda Continuar com Erros
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Tente novamente, a inicialização por rede é um funcionalidade Beta e
          pode conter erros. Por exemplo, relatórios no site oficial da
          Raspberry Pi indicam que uma reinicialização pode ser necessária se
          não estiver a funcionar.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase2"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Configuração do Servidor
        </a>
        <a
          href="/phase4"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Ideias & Afazeres
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
