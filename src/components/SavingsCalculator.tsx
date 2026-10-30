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
    <div className="only-f bg-surface border-t border-t-line border-b border-b-line">
      <div className="mx-auto my-0 px-10 py-22 max-w-[1000px] box-border">
        <h2
          className="mx-0 mt-0 mb-3 font-display font-bold text-[clamp(28px,6vw,42px)] wrap-break-word tracking-[0.01em] uppercase text-center"
          id="kalkylator"
        >
          Räkna på er besparing
        </h2>
        <p className="mx-auto mt-0 mb-10 text-[17px] leading-[1.6] max-w-[520px] text-center font-serif text-ink uppercase tracking-[0.03em]">
          Tre siffror ger en uppskattning av kostnad och tid.
        </p>
        <div className="p-10 rounded-card bg-page border border-line box-border">
          <div className="calc-grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-end">
            <div>
              <label
                className="mx-0 mt-0 mb-2.5 block text-[13px] font-semibold tracking-[0.1em] uppercase leading-[1.4]"
                htmlFor="calc-cost"
              >
                Månadskostnad för bokföringen
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
                Egen tid per vecka
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
                Värdet av en timme
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
                per år, inklusive värdet av er tid.
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
          <p className="mx-0 mt-6 mb-0 text-[17px] leading-[1.6] font-serif text-ink uppercase tracking-[0.03em] text-center">
            Arbete som Vera kan ta över, värt ungefär <strong>{valueText}</strong> per år. Jämför med månadspriset på
            XXX kr.
          </p>
          <p className="mx-0 mt-4 mb-0 text-[13px] leading-[1.5] text-ink-muted">
            Beräkningen antar att Vera tar över {shareText} av det återkommande arbetet: sortering, kontering och
            avstämning. Granskning och godkännande ligger kvar hos er. Uppskattningen ersätter inte en offert.
          </p>
          <div className="mt-6 text-center">
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
