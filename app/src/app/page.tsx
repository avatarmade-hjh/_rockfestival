"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.landing} ${expanded ? styles.landingExpanded : ""}`}>
      {/* ===== 배경 이미지 ===== */}
      <div className={styles.bgImage}>
        <Image
          src={expanded ? "/images/bg-expanded.webp" : "/images/bg-collapsed.webp"}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "fill" }}
          priority
        />
      </div>

      {/* ===== 콘텐츠 ===== */}
      <div className={styles.content}>

        {/* 키비주얼 */}
        <div className={styles.headCopy}>
          <Image
            src="/images/kv-bg.png"
            alt="TAKE A MOMENT TAKE A MOVEMENT"
            width={1240}
            height={776}
            className={styles.kvImg}
            priority
          />
          <Image
            src="/images/kv-front.png"
            alt=""
            width={1207}
            height={744}
            className={styles.kvImg}
            priority
          />
        </div>

        {/* 좋아하는 아티스트/음악/문화 - 삼각형 이미지 */}
        <div className={styles.cardsSection}>
          <Image
            src="/images/triangles.png"
            alt="좋아하는 아티스트, 음악, 문화"
            width={842}
            height={283}
            className={styles.trianglesImg}
          />
        </div>

        {/* 메인 타이틀 */}
        <h1 className={styles.mainTitle}>
          우리가 좋아하는 것들이 모여<br />숲이 됩니다.
        </h1>

        {/* 서브 타이틀 */}
        <div className={styles.subTitles}>
          <p className={styles.subTitleBold}>서울 히어로락페스티벌 X 트리헌드레드</p>
          <p className={styles.subTitleLight}>우리는 구상나무를 심어 숲을 살립니다.</p>
        </div>

        {/* "Rock Saves Trees" */}
        <div className={styles.rockSavesTrees}>
          &ldquo;Rock Saves Trees&rdquo;
        </div>

        {/* Just Enjoy a Moment! */}
        <h2 className={styles.enjoyMoment}>Just Enjoy a Moment!</h2>

        {/* 설명 텍스트 */}
        <p className={styles.descriptionText}>
          락페스티벌의 열기는<br />
          페스티벌이 끝난 후에도<br />
          구상나무 100그루의 약속으로 이어집니다.
        </p>

        {/* CTA 버튼 */}
        <a href="https://www.dodress.me/main" className={styles.ctaBtn}>
          <span>함께 숲 만들러 가기</span>
          <div className={styles.arrowLine} />
        </a>

        {/* 펼쳐보기/접어두기 */}
        <div className={styles.toggleSection}>
          <button
            className={styles.toggleBtn}
            onClick={() => setExpanded(!expanded)}
          >
            <span>
              {expanded ? "구상나무 이야기 [접어두기]" : "구상나무 이야기 [펼쳐보기]"}
            </span>
          </button>
        </div>

        <div style={{ height: 200 }} />
      </div>

      {/* ===== 펼쳐지는 콘텐츠 ===== */}
      {expanded && (
        <>
        <div className={styles.expandBg} />

        {/* K-TREE '구상나무' */}
        <h3 className={styles.ktreeTitle}>
          K-TREE<br /><span className={styles.ktreeTitleBold}>&lsquo;구상나무&rsquo;</span>
        </h3>

        {/* 구상나무 일러스트 (1920x640 클리핑) */}
        <div className={styles.treeIllustArea}>
          <Image
            src="/images/tree-illustration.png"
            alt="구상나무 일러스트"
            width={1618}
            height={1079}
            className={styles.illustImg}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/noise-bottom.webp"
            alt=""
            className={styles.illustNoiseImg}
          />
        </div>
        <div className={styles.expandInner}>

          {/* 구상나무 설명 */}
          <p className={styles.treeDesc}>
            구상나무는 전 세계에서 유일하게 대한민국에서만 자라는 고유수종입니다.<br />
            크리스마스 트리로 널리 알려져 전세계적인 사랑을 받는 수종이기도 합니다.<br />
            하지만 기후 변화로 인해 멸종위기종으로 지정되었으며,<br />
            우리나라에서도 집단 고사되면서 개체 수가 빠르게 줄어들고 있습니다.
          </p>

          {/* 수익 사용처 */}
          <p className={styles.revenueText}>
            이번 페스티벌에서 발생하는 수익은<br />
            멸종위기에 처한 대한민국 고유수종 &lsquo;구상나무&rsquo; 보존 활동에 사용됩니다.
          </p>

          {/* 브랜드 섹션 */}
          <p className={styles.brandSectionTitle}>
            함께하는 브랜드<br />
            <span className={styles.brandSectionTitleBold}>업사이클링, 친환경 브랜드와 함께합니다.</span>
          </p>

          <div className={styles.brandCards}>
            <div className={styles.brandCard}>
              <div className={styles.brandName}>두드레스</div>
              <div className={styles.brandDesc}>
                지속가능성을 추구하는<br />라이프&amp;스타일 기반<br />IP 콜라보레이션 플랫폼
              </div>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandName}>119REO</div>
              <div className={styles.brandDesc}>
                소방복을 업사이클링한 제품을 만드는 패션 브랜드
              </div>
            </div>
            <div className={styles.brandCard}>
              <div className={styles.brandName}>ETC</div>
              <div className={styles.brandDesc}>
                브랜드 설명을 간단하게 기재합니다. 2-3줄 요약.
              </div>
            </div>
          </div>

          {/* 하단 CTA */}
          <div className={styles.ctaBottomWrap}>
            <a href="https://www.dodress.me/main" className={styles.ctaBtn}>
              <span>함께 숲 만들러 가기</span>
              <div className={styles.arrowLine} />
            </a>
          </div>
        </div>
        </>
      )}

      {/* 스크롤 버튼 (고정) */}
      <div className={styles.scrollBtns}>
        <button
          className={styles.scrollBtn}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <polygon points="12,4 22,20 2,20" fill="#D9D9D9" />
          </svg>
        </button>
        <button
          className={`${styles.scrollBtn} ${styles.scrollBtnDown}`}
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <polygon points="12,4 22,20 2,20" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
