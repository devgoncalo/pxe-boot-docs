"use client";

import {
  NavigationArrow,
  HardDrives,
  Wrench,
  Sparkle,
  Desktop,
  Lightbulb,
} from "@phosphor-icons/react";

export function Introduction() {
  return (
    <div>
      <header className="mb-6 mt-16 space-y-2">
        <p className="font-display text-sm font-medium text-rose-700">
          BOAS VINDAS
        </p>
        <h1 className="font-display text-3xl font-medium text-slate-900 dark:text-gray-50">
          Á NOSSA DOCUMENTAÇÃO
        </h1>
      </header>
      <p className="lead">
        Esta documentação ensina a configurar um sistema operativo de rede, para
        tornar viável o trabalho de várias máquinas cliente ao mesmo tempo. Tudo
        a partir de uma máquina que está a servir todas as funcionalidades dos
        seus sistemas através da rede e de forma automatizada!
      </p>
      <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <NavigationArrow size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase0">
                <span className="absolute -inset-px rounded-xl"></span>
                Introdução
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Uma pequena introdução ao Preboot Execution Environment.
            </p>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <Desktop size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase1">
                <span className="absolute -inset-px rounded-xl"></span>
                Configuração Cliente
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Um guia passo a passo de como configurar o lado Cliente.
            </p>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <HardDrives size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase2">
                <span className="absolute -inset-px rounded-xl"></span>
                Configuração Servidor
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Um guia passo a passo de como configurar o lado Servidor.
            </p>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <Wrench size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase3">
                <span className="absolute -inset-px rounded-xl"></span>
                TroubleShooting
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Possível correção de erros, em que fase os localizar.
            </p>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <Lightbulb size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase4">
                <span className="absolute -inset-px rounded-xl"></span>
                Ideias & Afazeres
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Ideias e melhorias que gostariamos de implementar.
            </p>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.rose.900),theme(colors.rose.800),theme(colors.rose.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative overflow-hidden rounded-xl p-6">
            <Sparkle size={32} />
            <h2 className="font-display mt-4 text-base text-slate-900 dark:text-white">
              <a href="/phase5">
                <span className="absolute -inset-px rounded-xl"></span>
                Feedback & Conclusão
              </a>
            </h2>
            <p className="mt-1 text-sm text-slate-700 dark:text-gray-200">
              Como contribuir para este projeto e conclusão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
