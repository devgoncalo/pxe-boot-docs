"use client";

import { Lightbulb, Check, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

import Questions from "@/components/Questions";

export default function Phase4() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Lightbulb size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-xl font-medium text-gray-50 md:text-3xl">
            IDEIAS & AFAZERES
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Espaço para Melhorias
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Todo este processo é hacky. Por outras palavras, há muito mais para
          fazer e melhorar. Se o tempo o permitir, temos algumas ideias que
          gostariamos de implementar e melhorar.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Check size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /melhorias/e/ideias
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Parar de copiar os arquivos para o cliente fora do sistema de
            arquivos raiz do servidor. É provável que vá causar problemas em
            algum momento.
          </li>
          <li>
            Experimentar o{" "}
            <a
              className="text-rose-700"
              target="_blank"
              href="https://github.com/solo-io/packer-plugin-arm-image"
            >
              Packer Arm Image Builder
            </a>
            . Usar o Packer é uma solução muito mais limpa, será muito mais
            fácil automatizar compilações de imagens das distruições.
          </li>
          <li>
            Criar uma pequena imagem de base intocada para o cliente. Podemos
            usar{" "}
            <a
              className="text-rose-700"
              target="_blank"
              href="https://github.com/solo-io/packer-plugin-arm-image"
            >
              debootstrap
            </a>{" "}
            ou{" "}
            <a
              className="text-rose-700"
              target="_blank"
              href="https://github.com/solo-io/packer-plugin-arm-image"
            >
              multistrap
            </a>
            , por exemplo. Usarmos isso deve resultar em uma imagem base mais
            pequena.
          </li>
          <Questions>
            Debootstrap e Multistrap são ferramentas usadas para criar sistemas
            de arquivos raiz pequenos e personalizados em ambientes Linux. O
            Debootstrap é mais adequado para criar sistemas para uma única
            distribuição, enquanto o Multistrap é usado para criar sistemas
            complexos combinando pacotes de várias distribuições Linux.
          </Questions>
          <li>
            Atualmente, temos uma configuração de cliente único. Queremos criar
            um processo automatizado para adicionar e remover clientes mais
            limpo e melhor dimensionado.
          </li>
          <li>
            Este fluxo de trabalho faz com que os clientes tenham o mesmo nome
            de host que o servidor, a menos que o altere manualmente,
            pretendemos então automatizar isso.
          </li>
          <li>
            Aumentar a segurança da configuração do NFS. Possivelmente converter
            para montar o sistema de arquivos raiz de modo a ser somente
            leitura.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase3"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          TroubleShooting
        </a>
        <a
          href="/phase5"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Conclusão
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
