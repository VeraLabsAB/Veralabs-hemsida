"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";

/** Share of the recurring bookkeeping work Vera is assumed to take over. */
const SHARE_PERCENT = 80;

const toNumber = (value: string) => {
  const n = parseInt(value.replace(/\D/g, ""), 10);
  return Number.isNaN(n) ? 0 : n;
};

const formatKr = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + " kr";

export function SavingsCalculator() {
  const [cost, setCost] = useState("");
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");

  const share = SHARE_PERCENT / 100;
  const today = toNumber(cost) * 12 + toNumber(hours) * 52 * toNumber(rate);
  const monthlyHours = toNumber(hours) * (52 / 12) * share;

  const costValue = cost;
  const hoursValue = hours;
  const rateValue = rate;
  const onCost = (e: ChangeEvent<HTMLInputElement>) => setCost(e.target.value);
  const onHours = (e: ChangeEvent<HTMLInputElement>) => setHours(e.target.value);
  const onRate = (e: ChangeEvent<HTMLInputElement>) => setRate(e.target.value);
  const todayText = formatKr(today);
  const valueText = formatKr(today * share);
  const hoursText = String(monthlyHours > 0 && monthlyHours < 1 ? 1 : Math.round(monthlyHours));
  const hoursYearText = String(Math.round(toNumber(hours) * 52 * share));
  const shareText = `${SHARE_PERCENT} %`;

  return (
    <div className="only-f bg-surface min-[900px]:min-h-dvh box-border flex items-center scroll-mt-20" id="kalkylator">
      <div className="mx-auto my-0 px-10 py-20 w-full max-w-[1000px] box-border">
        <div className="mb-10 max-w-[720px] reveal">
          <div className="mb-5 px-3.5 py-1.5 rounded-full inline-block bg-chip text-contrast text-[13px] font-semibold tracking-[0.14em] uppercase">
            Kalkylator
          </div>
          <h2 className="mx-0 mt-0 mb-4 font-display font-bold uppercase tracking-[0.01em] text-[clamp(28px,6.5vw,42px)] leading-[1.05] wrap-break-word">
            Vad kostar bokföringen dig i dag?
          </h2>
          <p className="m-0 text-[18px] leading-[1.6] text-ink font-sans">
            Tre siffror, så ser du vad arbetet kostar i kronor och kvällar.
          </p>
        </div>
        <div className="p-10 rounded-card bg-page border border-line box-border reveal">
          <div className="calc-grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-end">
            <div>
              <label
                className="mx-0 mt-0 mb-2.5 block text-[13px] font-semibold tracking-[0.1em] uppercase leading-[1.4]"
                htmlFor="calc-cost"
              >
                Vad du betalar för bokföringen i dag (byrå, program, konsult)
              </label>
              <div className="calc-box">
                <input
                  className="calc-in"
                  id="calc-cost"
                  type="text"
                  inputMode="numeric"
                  placeholder="3 000"
                  value={costValue}
                  onChange={onCost}
                />
                <span className="text-[16px] font-semibold text-ink-soft">kr</span>
              </div>
            </div>
            <div>
              <label
                className="mx-0 mt-0 mb-2.5 block text-[13px] font-semibold tracking-[0.1em] uppercase leading-[1.4]"
                htmlFor="calc-hours"
              >
                Din egen tid per vecka
              </label>
              <div className="calc-box">
                <input
                  className="calc-in"
                  id="calc-hours"
                  type="text"
                  inputMode="numeric"
                  placeholder="5"
                  value={hoursValue}
                  onChange={onHours}
                />
                <span className="text-[16px] font-semibold text-ink-soft">tim</span>
              </div>
            </div>
            <div>
              <label
                className="mx-0 mt-0 mb-2.5 block text-[13px] font-semibold tracking-[0.1em] uppercase leading-[1.4]"
                htmlFor="calc-rate"
              >
                Vad en timme av din tid är värd
              </label>
              <div className="calc-box">
                <input
                  className="calc-in"
                  id="calc-rate"
                  type="text"
                  inputMode="numeric"
                  placeholder="500"
                  value={rateValue}
                  onChange={onRate}
                />
                <span className="text-[16px] font-semibold text-ink-soft">kr</span>
              </div>
            </div>
          </div>
          <div className="calc-grid mt-8">
            <div className="p-8 rounded-card bg-contrast text-ink-inverse box-border min-w-0">
              <div className="mb-3 text-[13px] font-semibold tracking-[0.1em] uppercase text-ink-inverse-soft leading-[1.4]">
                Kostnad i dag
              </div>
              <div className="font-display font-bold text-[56px] leading-none uppercase wrap-anywhere">{todayText}</div>
              <div className="mt-3 text-[14px] text-ink-inverse-soft leading-[1.5]">
                per år, inklusive värdet av din tid.
              </div>
            </div>
            <div className="p-8 rounded-card bg-contrast text-ink-inverse box-border min-w-0">
              <div className="mb-3 text-[13px] font-semibold tracking-[0.1em] uppercase text-ink-inverse-soft leading-[1.4]">
                Tid tillbaka
              </div>
              <div className="font-display font-bold text-[56px] leading-none uppercase wrap-anywhere">{hoursText}</div>
              <div className="mt-3 text-[14px] text-ink-inverse-soft leading-[1.5]">
                timmar i månaden, upp till {hoursYearText} per år.
              </div>
            </div>
          </div>
          <p className="mx-0 mt-6 mb-0 text-[18px] leading-[1.6] text-ink font-sans">
            Arbete Vera kan ta över, värt ungefär <strong>{valueText}</strong> per år. Jämför med Veras månadspris på
            XXX kr.
          </p>
          <p className="mx-0 mt-4 mb-0 text-[13px] leading-[1.5] text-ink-muted">
            Beräkningen antar att Vera tar över {shareText} av det återkommande arbetet: sortering, kontering och
            avstämning. Granskning och godkännande ligger kvar hos dig. Uppskattningen ersätter inte en offert.
          </p>
          <div className="mt-6">
            <Link
              className="btn btn--primary"
              href="/#kontakt"
            >
              Få en prisuppskattning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
