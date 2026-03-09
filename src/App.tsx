/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Send, 
  Bell, 
  User, 
  Info, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ChevronRight,
  History,
  Settings,
  MessageSquareHeart,
  Zap,
  Smile,
  Frown,
  Coffee
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'how-it-works' | 'safety' | 'subscribe' | 'write' | 'my';

interface Sentence {
  id: string;
  text: string;
  author: string;
  date: string;
  status: 'active' | 'archived';
}

// --- Mock Data ---
const DEMO_SENTENCES = [
  "지금의 너는 충분히 잘하고 있어. 증명하려 애쓰지 않아도 돼.",
  "오늘 하루가 무너진 게 아니라, 네가 너무 오래 버틴 거야.",
  "지금은 해결보다 회복이 먼저야. 속도를 늦춰도 괜찮아.",
  "너의 속도는 틀린 게 아니라 너만의 리듬일 뿐이야.",
  "충분히 아파해도 괜찮아. 그만큼 네가 진심이었다는 뜻이니까."
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const navItems: { label: string, value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'How it works', value: 'how-it-works' },
    { label: 'Safety', value: 'safety' },
    { label: 'Subscribe', value: 'subscribe' },
    { label: 'Write', value: 'write' },
    { label: 'My', value: 'my' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setPage('home')}
        >
          <div className="w-8 h-8 bg-main rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="text-lg font-bold tracking-tight text-ink"> 마음전해 </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setPage(item.value)}
              className={`text-[15px] font-semibold transition-colors hover:text-main ${
                currentPage === item.value ? 'text-main' : 'text-ink-light'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setPage('my')}
        >
          <User className="w-6 h-6 text-ink-light" />
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-bg-gray border-t border-border py-16 px-6 mt-20">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-main fill-current" />
          <span className="text-lg font-bold text-ink"> 마음전해 </span>
        </div>
        <p className="text-[14px] text-ink-light leading-relaxed">
          우리는 치료가 아니라, 정서적 지지 루틴을 만드는 것을 목표로 합니다.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-wider text-ink/30">Policy</span>
          <a href="#" className="text-[14px] text-ink-light hover:text-main transition-colors">개인정보 처리방침</a>
          <a href="#" className="text-[14px] text-ink-light hover:text-main transition-colors">이용약관</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[12px] font-bold uppercase tracking-wider text-ink/30">Support</span>
          <a href="#" className="text-[14px] text-ink-light hover:text-main transition-colors">문의/제휴</a>
          <a href="#" className="text-[14px] text-ink-light hover:text-main transition-colors">신고/차단 정책</a>
        </div>
      </div>
      <div className="text-[13px] text-ink/30 md:text-right">
        © 2026 마음전해. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-24 pb-12">
    {/* Hero Section */}
    <section className="max-w-4xl mx-auto px-6 text-center mb-32">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-ink tracking-tight"
      >
        하루에 한 문장.<br />
        <span className="text-main">오늘을 살아가는 나를 위해.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-ink-light mb-12 max-w-2xl mx-auto font-medium"
      >
        누군가 "듣고 싶은 말"이, 필요한 순간에 전달됩니다.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button 
          onClick={() => setPage('subscribe')}
          className="primary-button w-full sm:w-auto px-10 py-5 text-lg shadow-xl shadow-main/20"
        >
          오늘부터 받기
        </button>
        <button 
          onClick={() => setPage('write')}
          className="secondary-button w-full sm:w-auto px-10 py-5 text-lg"
        >
          한 문장 남기기
        </button>
      </motion.div>
    </section>

    {/* Demo Sentences */}
    <section className="bg-white py-24 overflow-hidden border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-[12px] font-bold uppercase tracking-[0.25em] text-ink/30 mb-16">
          누군가 당신을 위해 남긴 문장들
        </h2>
        <div className="flex flex-col gap-8">
          {DEMO_SENTENCES.map((text, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-bg-gray border border-border rounded-2xl p-10 max-w-lg ${i % 2 === 0 ? 'self-start' : 'self-end'} shadow-lg`}
            >
              <p className="text-xl md:text-2xl font-bold text-ink leading-relaxed italic">"{text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works summary */}
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-main/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <History className="w-8 h-8 text-main" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-ink">상태 선택</h3>
          <p className="text-[15px] text-ink-light font-medium leading-relaxed">지금 당신의 마음 상태를 알려주세요.<br />가장 적절한 문장을 찾기 위해서요.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-main/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-main" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-ink">문장 작성/검수</h3>
          <p className="text-[15px] text-ink-light font-medium leading-relaxed">내가 듣고 싶은 말을 남겨주세요.<br />AI가 안전한 문장인지 꼼꼼히 확인합니다.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-main/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Send className="w-8 h-8 text-main" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-ink">전달</h3>
          <p className="text-[15px] text-ink-light font-medium leading-relaxed">비슷한 순간을 지나는 누군가에게<br />당신의 진심이 전달됩니다.</p>
        </div>
      </div>
    </section>

    {/* Safety Teaser */}
    <section className="max-w-4xl mx-auto px-6 mb-24">
      <div className="trust-card p-16 text-center bg-white shadow-2xl shadow-ink/5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-bold mb-8 tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" /> SAFETY FIRST
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ink">해가 되는 문장은 전달되지 않습니다.</h2>
        <p className="text-lg text-ink-light mb-10 font-medium leading-relaxed">
          치료를 대체하지 않습니다. 대신, 하루의 루틴을 돕습니다.<br />
          모든 문장은 AI와 운영팀의 다중 검수를 거칩니다.
        </p>
        <button 
          onClick={() => setPage('safety')}
          className="text-main font-bold text-lg hover:text-main/80 transition-all flex items-center gap-2 mx-auto"
        >
          우리의 안전 약속 더 보기 <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  </div>
);

const HowItWorksPage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="pt-24 pb-12 max-w-4xl mx-auto px-6">
    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-ink">사람이 쓰고, AI는 전달합니다</h1>
    
    <div className="space-y-24 mt-16">
      <section>
        <div className="trust-card p-10">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-ink">
            <Zap className="w-6 h-6 text-main" /> 선순환 구조
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { label: 'Receiver', desc: '상태+시간 설정', icon: <Bell className="w-5 h-5" /> },
              { label: 'Writer', desc: '내가 듣고 싶은 말', icon: <MessageSquareHeart className="w-5 h-5" /> },
              { label: 'Curator', desc: '안전/검수 필터', icon: <ShieldCheck className="w-5 h-5" /> },
              { label: 'Delivery', desc: 'AI 매칭 배달', icon: <Send className="w-5 h-5" /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-bg-gray rounded-2xl relative">
                <div className="w-12 h-12 bg-main text-white rounded-xl flex items-center justify-center mb-4 shadow-md shadow-main/20">
                  {step.icon}
                </div>
                <span className="font-bold text-[15px] mb-1 text-ink">{step.label}</span>
                <span className="text-[13px] text-ink-light font-medium">{step.desc}</span>
                {i < 3 && <ChevronRight className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-ink">왜 ‘잘 쓰는 사람’이 아니라 ‘힘든 사람’인가</h3>
          <p className="text-ink-light leading-relaxed font-medium">
            그 순간 필요한 문장의 언어는 당사자가 가장 잘 알고 있습니다. 
            우리는 문학적 완성도보다, 같은 아픔을 겪어본 사람만이 건넬 수 있는 
            투박하지만 진실된 위로의 힘을 믿습니다.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-ink">AI의 역할은 명확합니다</h3>
          <ul className="space-y-4">
            {[
              { label: '생성 X', desc: 'AI가 거짓 위로를 만들지 않습니다.' },
              { label: '매칭 O', desc: '상태에 맞는 문장을 찾아 연결합니다.' },
              { label: '위험 탐지 O', desc: '유해한 문장을 실시간으로 걸러냅니다.' },
              { label: '다양성 보정 O', desc: '특정 톤에 치우치지 않게 조절합니다.' }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px]">
                <CheckCircle2 className="w-5 h-5 text-main mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold text-ink mr-2">{item.label}</span>
                  <span className="text-ink-light font-medium">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={() => setPage('subscribe')} className="primary-button shadow-lg shadow-main/20">받기 설정하기</button>
        <button onClick={() => setPage('write')} className="secondary-button">한 문장 남기기</button>
      </div>
    </div>
  </div>
);

const SafetyPage = () => (
  <div className="pt-24 pb-12 max-w-4xl mx-auto px-6">
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-ink">안전과 약속</h1>
    <p className="text-center text-ink-light font-medium mb-16">“따뜻함”보다 먼저 “안전”을 납득시킵니다.</p>

    <div className="space-y-16">
      <section className="trust-card p-10">
        <h2 className="text-2xl font-bold mb-8 text-red-600 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" /> 우리가 하지 않는 것 (No List)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            '치료/진단을 하지 않음',
            '죄책감/자책 유도 금지',
            '공격적 문장 허용 안 함'
          ].map((item, i) => (
            <div key={i} className="p-6 bg-red-50 rounded-2xl border border-red-100 text-[15px] font-bold text-red-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-8 text-ink">금지 카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: '죄책감 유도', desc: '“네가 더 노력했어야 해” 등 상대에게 문제의 원인을 귀속시키지 않음' },
            { title: '비난·혐오', desc: '특정 대상에 대한 공격 등 연결과 지지를 위반하는 문장은 신뢰를 무너뜨림' },
            { title: '충동성 강화', desc: '위험한 행동을 부추기는 문구 등은 충동을 밀어 올릴 수 있음' },
            { title: '위험현상 연상', desc: '직접적인 유해 정보 혹은 암시하는 문장은 전달 자체가 위험이 됨' }
          ].map((item, i) => (
            <div key={i} className="trust-card p-8">
              <span className="font-bold block mb-2 text-ink text-lg">{item.title}</span>
              <span className="text-[14px] text-ink-light font-medium leading-relaxed">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white p-10 rounded-[2rem] shadow-xl">
        <h2 className="text-2xl font-bold mb-6">의료 대체 아님 고지</h2>
        <p className="text-white/70 leading-relaxed mb-10 font-medium">
          이 서비스는 치료를 대체하지 않습니다. 마음이 많이 힘들 때는 전문가의 도움을 받는 것이 가장 중요합니다.
        </p>
        <div className="space-y-6">
          <p className="text-[13px] font-bold text-white/40 uppercase tracking-wider">도움이 필요할 때:</p>
          <div className="flex flex-wrap gap-4">
            <div className="px-5 py-3 bg-white/10 rounded-xl text-[15px] font-bold border border-white/10">자살예방 상담전화 109</div>
            <div className="px-5 py-3 bg-white/10 rounded-xl text-[15px] font-bold border border-white/10">정신건강 상담전화 1577-0199</div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const SubscribePage = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    status: '',
    emotions: [] as string[],
    energy: '',
    time: ''
  });

  const nextStep = () => setStep(s => s + 1);

  return (
    <div className="pt-24 pb-12 max-w-2xl mx-auto px-6">
      <div className="mb-16">
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`h-1.5 flex-1 mx-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-main' : 'bg-border'}`} 
            />
          ))}
        </div>
        <p className="text-[12px] font-bold text-main uppercase tracking-widest">Step {step} of 3</p>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-ink">이 달의 방향/마음가짐은 어떤가요?</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                '버티는 중', '리듬을 되찾는 중', '새로 시작하는 중', 
                '흔들리지만 계속 가는 중', '잠시 멈추고 싶은 중'
              ].map(opt => (
                <button
                  key={opt}
                  onClick={() => { setFormData({...formData, status: opt}); nextStep(); }}
                  className={`p-6 text-left rounded-2xl border-2 transition-all font-semibold text-[17px] ${
                    formData.status === opt ? 'bg-main/5 border-main text-main' : 'bg-white border-border text-ink-light hover:border-main/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-ink">지금의 감정과 에너지는?</h2>
            <p className="text-[15px] text-ink-light font-medium mb-10">감정 1~2개를 선택해주세요.</p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {['지침', '불안', '외로움', '무기력', '압박', '혼란', '슬픔', '예민', '공허', '답답', '기쁨', '응원'].map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    const newEmotions = formData.emotions.includes(tag) 
                      ? formData.emotions.filter(e => e !== tag)
                      : [...formData.emotions, tag].slice(0, 2);
                    setFormData({...formData, emotions: newEmotions});
                  }}
                  className={`px-5 py-2.5 rounded-full border-2 text-[15px] font-bold transition-all ${
                    formData.emotions.includes(tag) ? 'bg-main border-main text-white' : 'bg-white border-border text-ink-light hover:border-main/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-6 text-ink">에너지 레벨</h3>
            <div className="grid grid-cols-3 gap-4">
              {['낮음', '중간', '높음'].map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setFormData({...formData, energy: lvl})}
                  className={`p-5 rounded-2xl border-2 text-[15px] font-bold transition-all ${
                    formData.energy === lvl ? 'bg-main border-main text-white shadow-lg shadow-main/20' : 'bg-white border-border text-ink-light hover:border-main/40'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            
            <button 
              disabled={formData.emotions.length === 0 || !formData.energy}
              onClick={nextStep}
              className="primary-button w-full mt-12 shadow-lg shadow-main/20"
            >
              다음으로
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-ink">언제 문장을 받고 싶으신가요?</h2>
            <div className="grid grid-cols-2 gap-4 mb-12">
              {['아침 8시', '점심 12시', '오후 6시', '밤 11시'].map(t => (
                <button
                  key={t}
                  onClick={() => setFormData({...formData, time: t})}
                  className={`p-6 rounded-2xl border-2 transition-all font-bold text-[17px] ${
                    formData.time === t ? 'bg-main/5 border-main text-main' : 'bg-white border-border text-ink-light hover:border-main/40'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <button 
              disabled={!formData.time}
              onClick={() => setStep(4)}
              className="primary-button w-full shadow-lg shadow-main/20"
            >
              설정 완료
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-ink">당신의 하루에 지지를 보냅니다.</h2>
            <p className="text-ink-light font-medium mb-12">설정이 완료되었습니다. 매일 {formData.time}에 문장이 배달됩니다.</p>
            
            <div className="trust-card p-10 mb-12">
              <p className="text-[12px] font-bold text-main uppercase tracking-widest mb-6">오늘의 첫 문장 미리보기</p>
              <p className="text-2xl font-bold text-ink italic leading-relaxed">"지금 이대로도 당신은 충분히 빛나고 있어요."</p>
            </div>

            <button 
              onClick={() => setPage('my')}
              className="primary-button w-full shadow-lg shadow-main/20"
            >
              나의 페이지로 가기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WritePage = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleSubmit = () => {
    setChecking(true);
    // Simulate AI Safety Check
    setTimeout(() => {
      setChecking(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-12 max-w-2xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="w-24 h-24 bg-main/10 text-main rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm">
            <Heart className="w-12 h-12 fill-current" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-ink leading-tight">당신의 문장이 누군가의 하루를<br />지지하고 있어요.</h2>
          <p className="text-ink-light font-medium mb-12 leading-relaxed">결국 우리는 연결되어 있어요. 당신의 진심은 익명으로,<br />비슷한 순간의 누군가에게 전달됩니다.</p>
          <button 
            onClick={() => { setSubmitted(false); setText(''); }}
            className="primary-button px-10 shadow-lg shadow-main/20"
          >
            또 다른 문장 남기기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 max-w-2xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-ink">한 문장 남기기</h1>
      <p className="text-ink-light font-medium mb-12">지금 이 순간, 당신이 가장 듣고 싶은 말은 무엇인가요?</p>

      <div className="trust-card p-8 mb-10">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 문장을 작성해주세요..."
          className="w-full h-48 bg-transparent border-none focus:ring-0 text-xl font-semibold text-ink resize-none italic placeholder:text-ink/20"
        />
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-border">
          <span className="text-[12px] font-bold text-ink/30 uppercase tracking-wider">{text.length}자 작성 중</span>
          <button 
            disabled={!text || checking}
            onClick={handleSubmit}
            className="primary-button flex items-center gap-2 shadow-md shadow-main/20"
          >
            {checking ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                안전 검사 중...
              </>
            ) : '전달하기'}
          </button>
        </div>
      </div>

      <div className="bg-bg-gray p-8 rounded-2xl border border-border">
        <h3 className="text-[14px] font-bold mb-6 flex items-center gap-2 text-ink">
          <Info className="w-4 h-4 text-main" /> 작성 가이드
        </h3>
        <ul className="space-y-4 text-[14px] text-ink-light font-medium">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-main rounded-full mt-2 shrink-0" />
            죄책감이나 자책을 유도하는 표현은 삼가주세요.
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-main rounded-full mt-2 shrink-0" />
            모두를 존중하는 다정한 언어를 사용해주세요.
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-main rounded-full mt-2 shrink-0" />
            타인을 공격하거나 비난하는 내용은 전달되지 않습니다.
          </li>
        </ul>
      </div>
    </div>
  );
};

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<'archive' | 'settings'>('archive');

  return (
    <div className="pt-24 pb-12 max-w-4xl mx-auto px-6">
      <div className="flex items-center justify-between mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ink">나의 공간</h1>
        <div className="flex bg-bg-gray p-1.5 rounded-2xl border border-border">
          <button 
            onClick={() => setActiveTab('archive')}
            className={`px-8 py-2.5 rounded-xl text-[14px] font-bold transition-all ${activeTab === 'archive' ? 'bg-white text-ink shadow-sm' : 'text-ink-light hover:text-ink'}`}
          >
            아카이브
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-8 py-2.5 rounded-xl text-[14px] font-bold transition-all ${activeTab === 'settings' ? 'bg-white text-ink shadow-sm' : 'text-ink-light hover:text-ink'}`}
          >
            설정
          </button>
        </div>
      </div>

      {activeTab === 'archive' ? (
        <div className="space-y-10">
          <div className="trust-card p-12 text-center">
            <p className="text-[12px] font-bold text-main uppercase tracking-widest mb-8">오늘 받은 문장</p>
            <p className="text-2xl md:text-3xl font-bold text-ink italic mb-12 leading-relaxed">"오늘 하루가 무너진 게 아니라,<br />네가 너무 오래 버틴 거야."</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-xl text-[14px] font-bold hover:bg-emerald-100 transition-all">
                <Smile className="w-4 h-4" /> 도움 됨
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-amber-50 text-amber-700 rounded-xl text-[14px] font-bold hover:bg-amber-100 transition-all">
                <Frown className="w-4 h-4" /> 별로
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-700 rounded-xl text-[14px] font-bold hover:bg-red-100 transition-all">
                <AlertCircle className="w-4 h-4" /> 지금은 부담
              </button>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-16 mb-8 text-ink">지난 문장들</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEMO_SENTENCES.slice(1, 5).map((text, i) => (
              <div key={i} className="trust-card p-8">
                <p className="text-lg font-bold text-ink italic mb-4 leading-relaxed">"{text}"</p>
                <span className="text-[12px] font-bold text-ink/30 uppercase tracking-wider">2026.03.0{4-i}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="trust-card p-10 space-y-12">
          <section>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-ink">
              <Bell className="w-5 h-5 text-main" /> 알림 설정
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[12px] font-bold text-ink/30 uppercase tracking-widest block mb-3">전달 시간</label>
                <select className="w-full p-4 rounded-xl border-2 border-border bg-white text-[15px] font-bold text-ink focus:border-main outline-none transition-all">
                  <option>오후 6시 (현재)</option>
                  <option>아침 8시</option>
                  <option>점심 12시</option>
                  <option>밤 11시</option>
                </select>
              </div>
              <div>
                <label className="text-[12px] font-bold text-ink/30 uppercase tracking-widest block mb-3">문장 톤</label>
                <select className="w-full p-4 rounded-xl border-2 border-border bg-white text-[15px] font-bold text-ink focus:border-main outline-none transition-all">
                  <option>다정 (현재)</option>
                  <option>담백</option>
                  <option>현실적</option>
                </select>
              </div>
            </div>
          </section>

          <section className="pt-10 border-t border-border">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-ink">
              <ShieldCheck className="w-5 h-5 text-main" /> 안전 및 차단
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-5 bg-bg-gray rounded-2xl text-[15px] font-bold text-ink hover:bg-border/50 transition-all">
                <span>받고 싶지 않은 유형 설정 (태그 단위)</span>
                <ChevronRight className="w-5 h-5 text-ink/20" />
              </button>
              <button className="w-full flex items-center justify-between p-5 bg-bg-gray rounded-2xl text-[15px] font-bold text-ink hover:bg-border/50 transition-all">
                <span>신고 내역 확인 및 차단 리스트</span>
                <ChevronRight className="w-5 h-5 text-ink/20" />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'how-it-works': return <HowItWorksPage setPage={setPage} />;
      case 'safety': return <SafetyPage />;
      case 'subscribe': return <SubscribePage setPage={setPage} />;
      case 'write': return <WritePage />;
      case 'my': return <MyPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
