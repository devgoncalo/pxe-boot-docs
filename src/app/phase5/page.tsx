"use client";

import {
  Sparkle,
  Check,
  ArrowLeft,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Phase5() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Sparkle size={30} className="mb-0.5 text-rose-700" />
          <h1 className="text-2xl font-medium text-gray-50 md:text-3xl">
            FEEDBACK & CONCLUSÃO
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Como Contribuir com o seu FeedBack
          <span className="ml-2 text-rose-700">?</span>
        </h2>
        <p>
          O seu feedback é extremamente valioso para nós! Se tiver sugestões,
          melhorias ou ideias para compartilhar, gostaríamos de ouvi-las.
          Existem várias maneiras de contribuir e fornecer feedback sobre a
          nossa documentação:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-rose-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-rose-700 ring-1 ring-inset ring-rose-400 dark:text-rose-500 dark:ring-rose-500/30">
            <Check size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            /feedback/e/ajuda
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Pode visitar o repositório do projeto no GitHub e criar uma{" "}
            <kbd>`issue`</kbd>e descrever a sua sugestão, problema ou ideia.
            Certifique-se de fornecer informações detalhadas para que possamos
            entender melhor o está a partilhar.
          </li>
          <li>
            Se encontrar um erro no conteúdo ou quiser contribuir com melhorias
            diretamente, pode fazer isso através do GitHub. Basta fazer um
            <kbd>`fork`</kbd> do repositório, fazer as alterações desejadas e
            enviar um
            <kbd>`pull request`</kbd> para que possamos rever e incorporar as
            suas contribuições.
          </li>
          <li>
            Se achar o conteúdo útil, deixe uma estrela no repositório e deixe
            uma avaliação positiva. A sua opinião ajuda a promover a
            documentação e encoraja outros utilizadores a utilizarem a nossa
            documentação.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Conclusão e Créditos
          <span className="ml-2 text-rose-700">!</span>
        </h2>
        <p>
          Documentar todo este projeto deu-nos muito trabalho, um projeto com
          esta dimensão e tão abranjente permitiu-nos para além de aprender algo
          novo, adquirir novos conhecimentos assim como quem nos acompanhou até
          aqui.
        </p>
        <p>
          Desde do Hardware ao Software até ao desenvolvimento desta
          documentação foi uma grande experiência que voltariamos a repetir.
        </p>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="group relative w-full rounded-xl border border-slate-200 dark:border-gray-400">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
            <div className="relative overflow-hidden rounded-xl p-6">
              <h2 className="font-display text-base text-slate-900 dark:text-white">
                <div>
                  <span className="absolute -inset-px rounded-xl"></span>
                  Gonçalo Pinto
                </div>
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
                Veja o meu perfil do Github!
              </p>
              <div className="mt-2 flex gap-1">
                <a href="#" target="_blank">
                  <GithubLogo size={20} />
                </a>
                <a href="#" target="_blank">
                  <InstagramLogo size={20} />
                </a>
                <a href="#" target="_blank">
                  <TwitterLogo size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="group relative w-full rounded-xl border border-slate-200 dark:border-gray-400">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
            <div className="relative overflow-hidden rounded-xl p-6">
              <h2 className="font-display text-base text-slate-900 dark:text-white">
                <div>
                  <span className="absolute -inset-px rounded-xl"></span>
                  Shelton Mavile
                </div>
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
                Veja o meu perfil do Instagram!
              </p>
              <div className="mt-2 flex gap-1">
                <a href="#" target="_blank">
                  <InstagramLogo size={20} />
                </a>
                <a href="#" target="_blank">
                  <TwitterLogo size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600 " />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase3"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Ideias & Afazeres
        </a>
      </div>
    </>
  );
}
