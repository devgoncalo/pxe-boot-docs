"use client";

import {
  ArrowRight,
  Check,
  ArrowLeft,
  Footprints,
  List,
  Package,
  NavigationArrow,
} from "@phosphor-icons/react";

import Questions from "@/components/Questions";
import Infos from "@/components/Infos";

import Image from "next/image";
import fluxo from "../../assets/fluxo.png";

export default function Phase0() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <NavigationArrow size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-xl font-medium text-gray-50 md:text-3xl">
            INTRODUÇÃO
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          O que é Preboot Execution Environment
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          Para começar, vamos fornecer uma visão geral básica do PXE (Preboot
          Execution Environment), para que possa ter uma base antes de
          prosseguir. Se quiser saber mais sobre o PXE e como ele funciona,
          recomendamos a leitura deste{" "}
          <a
            className="text-rose-700"
            target="_blank"
            href="https://en.wikipedia.org/wiki/Preboot_Execution_Environment"
          >
            artigo
          </a>
          .
        </p>
        <p>
          O PXE é um padrão de inicialização de rede que permite o arranque de
          um computador através da rede utilizando protocolos comuns, como IP,
          UDP, DHCP e TFTP. Ele é amplamente utilizado em diversos cenários,
          tais como:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <List size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /lista/de/exemplos
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Inicialização de sistemas instalando uma imagem no armazenamento
            local.
          </li>
          <li>
            Inicialização de sistemas sem disco, que sempre são inicializados
            com uma imagem enviada pela rede. Por exemplo, o processo descrito
            nesta documentação.
          </li>
          <li>
            Implantação de sistemas operativos em larga escala, onde vários
            computadores podem ser inicializados e configurados simultaneamente
            através da rede.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Compreender o Fluxo de Inicialização PXE
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          No fluxo de inicialização PXE, as implementações podem variar e os
          componentes do servidor podem estar distribuídos por várias hosts. A
          seguir, explicaremos passo a passo como funciona o fluxo de
          inicialização:
        </p>
        <Image src={fluxo} alt="Fluxo do PXE" className="rounded-xl" />
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
            Primeiro, o cliente é inicializado e a interface de rede envia uma
            solicitação DHCP.
          </li>
          <Questions>
            Dynamic Host Configuration Protocol ou DHCP é um protocolo utilizado
            em redes de computadores que permite às máquinas obterem um endereço
            de IP automaticamente.
          </Questions>
          <li>
            Um servidor DHCP responde com uma alocação temporária de
            configurações. Esta alocação temporária terá uma opção{" "}
            <kbd>`next-server`</kbd>.
          </li>
          <Infos>
            A opção `next-server` é uma opção específica do protocolo DHCP
            (opção 66) que indica o endereço IP ou nome do servidor a partir do
            qual o cliente deve descarregar os arquivos de inicialização.
          </Infos>
          <li>
            Em seguida, o cliente faz o download dos arquivos via TFTP do host
            especificado no campo anterior: <kbd>`next-server`</kbd>.
          </li>
          <Questions>
            Trivial File Transfer Protocol ou TFTP é um simples lockstep File
            Transfer Protocol que permite que um cliente obtenha um arquivo ou
            coloque um arquivo em um host remoto.
          </Questions>
          <li>
            Normalmente, os arquivos descarregados incluem o Kernel e uma imagem
            do sistema operativo. No entanto, também poderiam ser outros
            arquivos, como uma cadeia de inicialização para carregar outro
            cliente.
          </li>
          <li>
            O cliente então inicializa os arquivos descarregados e inicia o seu
            processo de inicialização.
          </li>
          <li>
            Neste ponto, o cliente pode iniciar uma instalação do sistema
            operativo ou inicializar como um sistema sem disco.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Lista de Material e Alguns Pressupostos
          <span className="ml-2 text-rose-700">.</span>
        </h2>
        <p>
          Estamos prestes a começar antes vamos apenas listar os materiais que
          vamos necessitar para fazer esta inicialização acontecer e vamos supor
          alguns pressupostos de sua parte.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Package size={12} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /lista/de/materiais
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Duas Raspberry Pi 4, utilizamos as do Kit Pi 400 com 4GB de Ram.
          </li>
          <li>
            Cabo MICRO-USB para HDMI, Monitor e Teclado USB para depuração.
          </li>
          <li>
            Um ou dois cartões micro SD. No nosso caso usamos dois de 32GB porém
            o kit trás de 16GB.
          </li>
          <li>
            Um leitor de cartões SD, para carregar a imagem do Raspbian pelo
            menos para um cartão.
          </li>
          <li>
            Uma máquina Windows, para podermos carregar a imagem através do
            programa oficial.
          </li>
        </ul>

        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Check size={12} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /alguns/pressupostos
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Tem uma rede existente com acesso à Internet que pode ser usada para
            instalar pacotes na sua RaspBerry.
          </li>
          <li>
            Tem uma rede dedicada ou autônoma para executar o cliente e o
            servidor de inicialização PXE. Este pode ser um switch de rede ou
            pode simplesmente ser um cabo ethernet entre as duas Raspberry's.
          </li>
          <li>
            Teremos o seguinte endereço IP de rede para a sua Raspberry
            Servidor: <kbd>`192.168.2.100`</kbd>, o cliente depois irá receberá
            um endereço IP via DHCP.
          </li>
          <li>
            A máscara de sub-rede no servidor deve ser{" "}
            <kbd>`/24 (255.255.255.0)`</kbd>.
          </li>
          <Infos>
            Pode ajustar estes parâmetros como melhor entender, mas toda a
            documentação assume e leva como base os mesmos.
          </Infos>
        </ul>
        <hr className="mt-1 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 flex justify-between">
        <a
          href="/"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Início
        </a>
        <a
          href="/phase1"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Configuração do Cliente
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
