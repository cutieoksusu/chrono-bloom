import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, Sprout, Map as MapIcon, Calendar, Settings, 
  CheckCircle2, Circle, Plus, Trophy, Star, X, ChevronRight, ChevronLeft,
  Clock, ListTodo, Layers, Lock, Unlock, BarChart3, Settings2, Trash2
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged, updateEmail, updatePassword 
} from 'firebase/auth';
import { 
  getFirestore, collection, doc, setDoc, onSnapshot, 
  updateDoc, deleteDoc, addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEy_uqAMv2iOTggVO5s6WLjLml-SLM1gY",
  authDomain: "plan-garden.firebaseapp.com",
  projectId: "plan-garden",
  storageBucket: "plan-garden.firebasestorage.app",
  messagingSenderId: "423356619921",
  appId: "1:423356619921:web:f6fd35bcc3f6ed1fb2b330",
  measurementId: "G-CT751EHPMW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'plan-garden';

const THEMES = [
  { id: "t01", name: "새싹 정원", color: "#4ade80", icons: ["🌰", "🌱", "🌿", "🌷", "🌳"], stages: ["씨앗", "새싹", "작은 풀잎", "꽃봉오리", "빛나는 정원"] },
  { id: "t02", name: "우주선 키우기", color: "#60a5fa", icons: ["⚙️", "🚀", "🛰️", "🛸", "🌌"], stages: ["부품", "작은 로켓", "탐사선", "우주선", "별빛 항해선"] },
  { id: "t03", name: "몬스터 진화", color: "#c084fc", icons: ["🥚", "🦖", "🐉", "🐲", "👹"], stages: ["알", "아기 몬스터", "장난꾸러기", "강한 몬스터", "전설 몬스터"] },
  { id: "t04", name: "고양이 마을", color: "#fbbf24", icons: ["🐾", "🧶", "🐈", "🏠", "🏰"], stages: ["길고양이", "작은 집", "고양이 가게", "고양이 광장", "고양이 왕국"] },
  { id: "t05", name: "마법 도서관", color: "#818cf8", icons: ["🪶", "📜", "📚", "🔮", "🏛️"], stages: ["빈 책상", "책 더미", "마법책", "비밀 서가", "대마법 도서관"] },
  { id: "t06", name: "바닷속 산호섬", color: "#2dd4bf", icons: ["🫧", "🪸", "🐠", "🐬", "🧜‍♀️"], stages: ["모래 바닥", "작은 산호", "물고기 무리", "산호 정원", "심해 궁전"] },
  { id: "t07", name: "구름 왕국", color: "#bae6fd", icons: ["☁️", "🌤️", "⛅", "🌈", "🏰"], stages: ["작은 구름", "구름 계단", "하늘 집", "무지개 다리", "구름 성"] },
  { id: "t08", name: "사막 오아시스", color: "#fcd34d", icons: ["🏜️", "🐪", "🌴", "⛺", "🕌"], stages: ["모래언덕", "작은 샘", "야자수", "오아시스 마을", "황금 궁전"] },
  { id: "t09", name: "눈꽃 마을", color: "#e0f2fe", icons: ["❄️", "⛄", "🛖", "⛸️", "🏰"], stages: ["눈송이", "작은 오두막", "눈사람 마을", "얼음 정원", "오로라 성"] },
  { id: "t10", name: "도시 건설", color: "#9ca3af", icons: ["🧱", "🏗️", "🏪", "🏢", "🏙️"], stages: ["빈 땅", "작은 가게", "거리", "빌딩 숲", "빛나는 도시"] },
  { id: "t11", name: "커피 연구소", color: "#78350f", icons: ["🫘", "☕", "🍯", "🧪", "🏪"], stages: ["원두", "작은 카페", "로스팅 룸", "연구소", "마스터 카페"] },
  { id: "t12", name: "용의 둥지", color: "#ef4444", icons: ["🔥", "🐉", "🌋", "🏰", "👑"], stages: ["용알", "아기 용", "작은 둥지", "하늘 나는 용", "고대 용의 성"] },
  { id: "t13", name: "달빛 기차", color: "#4f46e5", icons: ["🎫", "🚂", "🛤️", "🚉", "🌌"], stages: ["낡은 역", "작은 열차", "달빛 철로", "별의 플랫폼", "은하 특급"] },
  { id: "t14", name: "숲속 동물원", color: "#16a34a", icons: ["🍃", "🐰", "🦊", "🎪", "🏞️"], stages: ["풀밭", "토끼 굴", "동물 친구들", "숲속 축제", "대자연 보호구역"] },
  { id: "t15", name: "미니 행성", color: "#a78bfa", icons: ["🪨", "🌍", "🪐", "🌟", "✨"], stages: ["작은 돌덩이", "풀밭 행성", "물 행성", "문명 행성", "빛나는 행성"] },
  { id: "t16", name: "요리 왕국", color: "#f97316", icons: ["🍳", "🥘", "🍱", "👨‍🍳", "🏰"], stages: ["작은 냄비", "주방", "레스토랑", "왕실 주방", "미식 왕국"] },
  { id: "t17", name: "탐험가 캠프", color: "#65a30d", icons: ["🎒", "⛺", "🔥", "🗺️", "⛰️"], stages: ["배낭", "텐트", "캠프파이어", "탐험 기지", "전설의 지도"] },
  { id: "t18", name: "음악 스튜디오", color: "#ec4899", icons: ["🎵", "🎸", "🎧", "🎹", "🎭"], stages: ["작은 악보", "악기 방", "녹음실", "콘서트홀", "별빛 무대"] },
  { id: "t19", name: "문구점 세계", color: "#f43f5e", icons: ["✏️", "📓", "🖍️", "🏪", "🎨"], stages: ["연필", "노트", "책상", "문구점", "창작 아틀리에"] },
  { id: "t20", name: "시간의 탑", color: "#d97706", icons: ["⏳", "🕰️", "⚙️", "🔭", "🗼"], stages: ["낡은 시계", "작은 탑", "톱니바퀴 방", "시간 관측소", "영원의 탑"] },
  { id: "t21", name: "유령 저택", color: "#6b7280", icons: ["🕯️", "🚪", "👻", "🏰", "🦇"], stages: ["촛불", "작은 방", "유령 친구", "비밀 저택", "달밤의 성"] },
  { id: "t22", name: "벌꿀 정원", color: "#eab308", icons: ["🌼", "🐝", "🍯", "🌻", "👑"], stages: ["꽃씨", "벌집", "꿀단지", "꽃밭", "황금 벌꿀 왕국"] },
  { id: "t23", name: "로봇 공장", color: "#3b82f6", icons: ["🔩", "🤖", "⚙️", "🏭", "🚀"], stages: ["나사", "작은 로봇", "조립 라인", "자동 공장", "슈퍼 로봇 기지"] },
  { id: "t24", name: "별자리 박물관", color: "#1e3a8a", icons: ["⭐", "🌌", "🖼️", "🔭", "🏛️"], stages: ["작은 별", "별자리판", "전시관", "천문대", "우주 박물관"] },
  { id: "t25", name: "요정 숲", color: "#84cc16", icons: ["✨", "🍄", "🧚", "🌲", "🏰"], stages: ["반딧불", "작은 버섯집", "요정 마을", "마법 숲", "요정 왕국"] },
  { id: "t26", name: "고대 유적", color: "#b45309", icons: ["🪨", "🏛️", "🏺", "🗺️", "👑"], stages: ["돌조각", "기둥", "신전 입구", "유적 도시", "잊힌 왕국"] },
  { id: "t27", name: "해적섬", color: "#111827", icons: ["📦", "⛵", "🏴‍☠️", "🏝️", "⚓"], stages: ["나무상자", "작은 배", "해적 깃발", "보물섬", "전설의 함대"] },
  { id: "t28", name: "영화 제작소", color: "#be185d", icons: ["🎬", "🎥", "🎞️", "🍿", "🏆"], stages: ["카메라", "작은 세트장", "편집실", "시사회장", "대작 스튜디오"] },
  { id: "t29", name: "놀이공원", color: "#db2777", icons: ["🎟️", "🎠", "🎡", "🎢", "🎪"], stages: ["티켓", "작은 회전목마", "놀이기구", "퍼레이드", "환상의 놀이공원"] },
  { id: "t30", name: "별빛 정원", color: "#312e81", icons: ["🌱", "✨", "🌸", "🌌", "👑"], stages: ["작은 별씨앗", "별빛 새싹", "은하 꽃", "우주 정원", "영원의 정원"] }
];

const DEFAULT_CATEGORIES = [
  { id: 'cat_study', name: '공부', color: '#60a5fa' },
  { id: 'cat_work', name: '업무', color: '#f87171' },
  { id: 'cat_health', name: '운동', color: '#4ade80' },
  { id: 'cat_rest', name: '휴식', color: '#facc15' },
  { id: 'cat_sleep', name: '수면', color: '#818cf8' },
  { id: 'cat_etc', name: '기타', color: '#9ca3af' },
];

const DEFAULT_STATS = {
  totalSuccessDays: 0,
  totalExp: 0,
  level: 1,
  currentThemeIndex: 0,
  currentThemeProgress: 0,
  themeDuration: 100, // 기본 100일
  selectedDisplayThemeId: null,
  streak: 0,
  history: {} 
};

const ProgressService = {
  getTodayStr: (offsetDays = 0) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  },

  calculateDailyRate: (tasks, recurringTasks, taskCompletions, dateStr) => {
    const dailyNormal = tasks.filter(t => t.date === dateStr);
    const dailyRecur = recurringTasks.filter(t => t.isActive);
    const completedNormal = dailyNormal.filter(t => t.completed).length;
    const completedRecur = dailyRecur.filter(t => taskCompletions.find(c => c.taskId === t.id && c.date === dateStr && c.completed)).length;
    const total = dailyNormal.length + dailyRecur.length;
    return total === 0 ? 0 : (completedNormal + completedRecur) / total;
  },

  addProgressIfSuccess: async (uid, currentStats, dailyRate, dateStr, triggerModal) => {
    if (dailyRate < 0.6) return;
    
    const todayLog = currentStats.history[dateStr] || {};
    if (todayLog.progressAdded) return; 

    let { totalSuccessDays, totalExp, level, currentThemeIndex, currentThemeProgress, streak, themeDuration } = currentStats;
    const duration = themeDuration || 100;
    
    totalExp += 30;
    level = Math.floor(totalExp / 100) + 1;
    
    const yesterdayStr = ProgressService.getTodayStr(-1);
    if (currentStats.history[yesterdayStr]?.success) streak += 1;
    else streak = 1;

    totalSuccessDays += 1;
    let themeCompleted = false;
    
    if (currentThemeIndex < THEMES.length) {
      currentThemeProgress += 1;
      if (currentThemeProgress >= duration) {
        currentThemeProgress = 0;
        currentThemeIndex += 1;
        themeCompleted = true;
      }
    }

    const newHistory = { ...currentStats.history, [dateStr]: { success: true, progressAdded: true } };
    const updates = { totalSuccessDays, totalExp, level, currentThemeIndex, currentThemeProgress, streak, history: newHistory };
    
    await updateDoc(doc(db, 'artifacts', appId, 'users', uid, 'profile', 'gamestats'), updates);

    triggerModal("목표 달성! 🚀", `성장 진행도가 1일 증가했습니다. (+30XP)`, "✨");
    if (themeCompleted && currentThemeIndex < THEMES.length) {
      setTimeout(() => triggerModal("새로운 테마 해금! 🎉", `'${THEMES[currentThemeIndex].name}' 테마가 열렸습니다!`, THEMES[currentThemeIndex].icons[0]), 1500);
    }
  }
};
const ProfileModal = ({ user, onClose }) => {
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      // 1. 이메일이 바뀌었으면 업데이트!
      if (newEmail !== user.email) {
        await updateEmail(user, newEmail);
      }
      // 2. 비밀번호를 새로 입력했으면 업데이트!
      if (newPassword) {
        await updatePassword(user, newPassword);
      }
      setMessage("정보가 성공적으로 변경되었습니다! 🎉");
      setTimeout(() => onClose(), 1500); // 1.5초 뒤에 창 닫기
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/requires-recent-login') {
        setMessage("보안을 위해 로그아웃 후 다시 로그인해야 변경할 수 있습니다.");
      } else {
        setMessage("오류가 발생했습니다: " + error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-stone-800">👤 마이페이지</h2>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-stone-600 mb-1">이메일 변경</label>
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-3 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 bg-stone-50"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-stone-600 mb-1">새 비밀번호 (변경 시에만)</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="새로운 비밀번호 입력"
            className="w-full p-3 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 bg-stone-50"
          />
        </div>

        {message && <p className="text-sm mb-4 text-emerald-600 font-bold text-center">{message}</p>}

        <div className="flex gap-2">
          <button onClick={onClose} className="flex-1 p-3 bg-stone-100 text-stone-600 rounded-xl font-bold hover:bg-stone-200">
            취소
          </button>
          <button onClick={handleUpdate} className="flex-1 p-3 bg-stone-800 text-white rounded-xl font-bold hover:bg-black">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('today');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const [tasks, setTasks] = useState([]);
  const [recurringTasks, setRecurringTasks] = useState([]);
  const [taskCompletions, setTaskCompletions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [timeLogs, setTimeLogs] = useState({});
  const [stats, setStats] = useState(DEFAULT_STATS);
  
  const [loading, setLoading] = useState(true);
  const [rewardQueue, setRewardQueue] = useState([]);
  const [recordSubTab, setRecordSubTab] = useState('time'); // 'time'은 타임라인, 'stats'는 통계 화면
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.warn("Auth initial error fallback", e);
        try { await signInAnonymously(auth); } catch (e2) {}
      }
    };
    initAuth();
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const userRef = doc(db, 'artifacts', appId, 'users', user.uid);
    
    const unsubStats = onSnapshot(doc(collection(userRef, 'profile'), 'gamestats'), (docSnap) => {
      if (docSnap.exists()) setStats({ ...DEFAULT_STATS, ...docSnap.data() });
      else setDoc(doc(collection(userRef, 'profile'), 'gamestats'), DEFAULT_STATS);
      setLoading(false);
    });

    const unsubCategories = onSnapshot(collection(userRef, 'categories'), (snap) => {
      if (snap.empty) {
        DEFAULT_CATEGORIES.forEach(cat => setDoc(doc(collection(userRef, 'categories'), cat.id), cat));
      } else {
        setCategories(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      }
    });

    const unsubTasks = onSnapshot(collection(userRef, 'tasks'), snap => setTasks(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubRecurring = onSnapshot(collection(userRef, 'recurringTasks'), snap => setRecurringTasks(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    const unsubCompletions = onSnapshot(collection(userRef, 'taskCompletions'), snap => setTaskCompletions(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
    
    const unsubTimeLogs = onSnapshot(collection(userRef, 'timeLogs'), snap => {
      const logs = {};
      snap.docs.forEach(d => { logs[d.id] = d.data().blocks || {}; });
      setTimeLogs(logs);
    });

    return () => { unsubStats(); unsubCategories(); unsubTasks(); unsubRecurring(); unsubCompletions(); unsubTimeLogs(); };
  }, [user]);

  const triggerModal = (title, message, icon) => setRewardQueue(prev => [...prev, { id: Date.now(), title, message, icon }]);

  const handleTaskToggle = async (taskId, currentCompleted, isRecurring = false) => {
    if (!user) return;
    const todayStr = ProgressService.getTodayStr();
    const newCompletedState = !currentCompleted;
    
    if (isRecurring) {
      const existing = taskCompletions.find(c => c.taskId === taskId && c.date === todayStr);
      if (existing) await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'taskCompletions', existing.id), { completed: newCompletedState });
      else await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'taskCompletions'), { taskId, date: todayStr, completed: newCompletedState });
    } else {
      await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'tasks', taskId), { completed: newCompletedState });
    }

    if (newCompletedState) {
      const mockCompletions = isRecurring ? [...taskCompletions, { taskId, date: todayStr, completed: true }] : taskCompletions;
      const mockTasks = !isRecurring ? tasks.map(t => t.id === taskId ? { ...t, completed: true } : t) : tasks;
      const rate = ProgressService.calculateDailyRate(mockTasks, recurringTasks, mockCompletions, todayStr);
      ProgressService.addProgressIfSuccess(user.uid, stats, rate, todayStr, triggerModal);
    }
  };

  const handleTimeLogUpdate = async (dateStr) => {
    const logStr = JSON.stringify(timeLogs[dateStr] || {});
    if (logStr.length > 5 && dateStr === ProgressService.getTodayStr() && !stats.history?.[`${dateStr}_time_reward`]) {
      await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'gamestats'), {
        history: { ...stats.history, [`${dateStr}_time_reward`]: true },
        totalExp: stats.totalExp + 15
      });
      triggerModal("꼼꼼한 기록가 ⏱️", "오늘 첫 시간 기록을 남겼습니다! (+15XP)", "📝");
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center bg-stone-50">데이터 불러오는 중...</div>;

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-stone-50 text-stone-800 shadow-xl overflow-hidden relative">
      <header className="px-5 py-4 bg-white shadow-sm z-10 flex justify-between items-center">
        <h1 className="font-bold text-xl text-stone-800 flex items-center gap-2">
          <Sprout className="text-emerald-500" /> Chrono Bloom
        </h1>
        <div className="flex gap-2 text-xs font-semibold items-center">
          <span className="flex items-center gap-1 bg-stone-100 px-2 py-1 rounded-full text-stone-600">Lv.{stats.level}</span>
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full"><Star size={12}/> {stats.totalExp}XP</span>
          {/* 251번 줄 아래에 이 세 줄을 쏙 복사해서 붙여넣으세요! */}
          <button onClick={() => setIsProfileOpen(true)} className="p-1 text-stone-400 hover:text-stone-600 ml-1">
            👤
          </button>
          <button onClick={() => setIsSettingsOpen(true)} className="p-1 text-stone-400 hover:text-stone-600 ml-1 transition-colors"><Settings2 size={18}/></button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20 no-scrollbar bg-stone-50">
        {activeTab === 'today' && <TodayScreen user={user} appId={appId} tasks={tasks} recurringTasks={recurringTasks} taskCompletions={taskCompletions} categories={categories} handleTaskToggle={handleTaskToggle} stats={stats} />}
        {activeTab === 'recurring' && <RecurringTaskScreen user={user} appId={appId} recurringTasks={recurringTasks} categories={categories} />}
        {/* 기존 tracker 화면을 서브 탭으로 분리한 코드 */}
        {activeTab === 'tracker' && (
          <div className="h-full flex flex-col">
            {/* 상단 미니 스위치 */}
            <div className="flex bg-stone-100 p-1 mx-4 mt-4 mb-2 rounded-lg shrink-0">
              <button 
                onClick={() => setRecordSubTab('time')}
                className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${recordSubTab === 'time' ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-400'}`}>
                타임라인
              </button>
              <button 
                onClick={() => setRecordSubTab('stats')}
                className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${recordSubTab === 'stats' ? 'bg-white text-stone-800 shadow-sm' : 'text-stone-400'}`}>
                통계 분석
              </button>
            </div>
            
            {/* 화면 전환 영역 */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {recordSubTab === 'time' ? (
                /* 기존에 있던 TimeTrackerScreen 코드를 그대로 넣습니다 (잘린 부분의 속성들도 꼭 그대로 유지해 주세요!) */
                <TimeTrackerScreen user={user} appId={appId} categories={categories} timeLogs={timeLogs} />
              ) : (
                /* 기존에 있던 StatsScreen 코드를 그대로 넣습니다 */
                <StatsScreen categories={categories} timeLogs={timeLogs} />
              )}
            </div>
          </div>
        )}
        {activeTab === 'growth' && <ThemeGrowthScreen stats={stats} />}
        {activeTab === 'collection' && <ThemeCollectionScreen user={user} appId={appId} stats={stats} />}
        {activeTab === 'map' && <ThemeMapScreen stats={stats} />}
      </main>

      {/* 가로 스크롤 가능한 탭 네비게이션 */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-stone-200 z-20 pb-safe">
        <div className="flex justify-around items-center px-2 py-2 w-full">
          <TabButton icon={<Home size={22}/>} label="Today" active={activeTab === 'today'} onClick={() => setActiveTab('today')} />
          <TabButton icon={<ListTodo size={22}/>} label="반복" active={activeTab === 'recurring'} onClick={() => setActiveTab('recurring')} />
          <TabButton icon={<Clock size={22}/>} label="기록" active={activeTab === 'tracker'} onClick={() => setActiveTab('tracker')} />
          <TabButton icon={<Sprout size={22}/>} label="성장" active={activeTab === 'growth'} onClick={() => setActiveTab('growth')} />
          <TabButton icon={<MapIcon size={22}/>} label="월드맵" active={activeTab === 'map'} onClick={() => setActiveTab('map')} />
        </div>
      </nav>

      {rewardQueue.length > 0 && <RewardModal data={rewardQueue[0]} onClose={() => setRewardQueue(prev => prev.slice(1))} />}
      {isSettingsOpen && <SettingsModal user={user} appId={appId} stats={stats} onClose={() => setIsSettingsOpen(false)} />}
      {isProfileOpen && <ProfileModal user={user} onClose={() => setIsProfileOpen(false)} />}
    </div>
  );
}

const TodayScreen = ({ user, appId, tasks, recurringTasks, taskCompletions, categories, handleTaskToggle, stats }) => {
  const [newTask, setNewTask] = useState("");
  const today = ProgressService.getTodayStr();
  
  const dailyTasks = tasks.filter(t => t.date === today);
  const dailyRecur = recurringTasks.filter(t => t.isActive);
  const totalCount = dailyTasks.length + dailyRecur.length;
  
  const completedNormalCount = dailyTasks.filter(t => t.completed).length;
  const completedRecurCount = dailyRecur.filter(t => taskCompletions.find(c => c.taskId === t.id && c.date === today && c.completed)).length;
  const completedCount = completedNormalCount + completedRecurCount;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim() || !user) return;
    await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'tasks'), { title: newTask, completed: false, date: today });
    setNewTask("");
  };

  const deleteTask = async (taskId) => {
    if(!user) return;
    await deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'tasks', taskId));
  };

  return (
    <div className="p-5 space-y-6">
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
        <div className="flex justify-between items-end mb-4 pl-2">
          <div>
            <h2 className="text-2xl font-bold text-stone-800">오늘의 여정</h2>
            <p className="text-stone-400 text-sm mt-1">{totalCount === 0 ? "계획을 추가해보세요." : "60% 달성 시 성장 진행도가 오릅니다."}</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-blue-600">{completedCount}</span>
            <span className="text-stone-400 font-medium"> / {totalCount}</span>
          </div>
        </div>
        <div className="h-4 w-full bg-stone-100 rounded-full overflow-hidden ml-2">
          <div className={`h-full rounded-full transition-all duration-500 ${progressPercent >= 60 ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="space-y-3">
        {dailyRecur.map(task => {
          const isCompleted = !!taskCompletions.find(c => c.taskId === task.id && c.date === today && c.completed);
          const cat = categories.find(c => c.id === task.categoryId);
          return (
            <div key={task.id} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: cat?.color || '#cbd5e1' }} />
              <button onClick={() => handleTaskToggle(task.id, isCompleted, true)} className="ml-2 text-stone-300 hover:text-blue-500">
                {isCompleted ? <CheckCircle2 className="text-blue-500" size={26} /> : <Circle size={26} />}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: cat?.color || '#94a3b8' }}>
                    {cat?.name || '분류없음'} 🔁
                  </span>
                </div>
                <span className={`block ${isCompleted ? 'text-stone-400 line-through' : 'text-stone-700 font-medium'}`}>{task.title}</span>
              </div>
            </div>
          )
        })}
        {dailyTasks.map(task => (
          <div key={task.id} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-100 group">
            <button onClick={() => handleTaskToggle(task.id, task.completed)} className="text-stone-300 hover:text-blue-500">
              {task.completed ? <CheckCircle2 className="text-blue-500" size={26} /> : <Circle size={26} />}
            </button>
            <span className={`flex-1 font-medium ${task.completed ? 'text-stone-400 line-through' : 'text-stone-700'}`}>{task.title}</span>
            <button onClick={() => deleteTask(task.id)} className="text-stone-200 hover:text-red-400 opacity-0 group-hover:opacity-100 p-2"><Trash2 size={16}/></button>
          </div>
        ))}
      </div>

      <form onSubmit={addTask} className="relative mt-4">
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="단건 계획 추가..." className="w-full bg-white border border-stone-200 rounded-2xl py-4 pl-4 pr-12 focus:ring-2 outline-none shadow-sm"/>
        <button type="submit" disabled={!newTask.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-800 text-white rounded-xl disabled:bg-stone-300"><Plus size={20} /></button>
      </form>
    </div>
  );
};

const RecurringTaskScreen = ({ user, appId, recurringTasks, categories }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const saveTask = async (e) => {
    e.preventDefault();
    if (!user || !title.trim() || !categoryId) return alert("제목과 카테고리를 입력하세요.");
    await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'recurringTasks'), {
      title, categoryId, isActive: true, createdAt: new Date().toISOString()
    });
    setIsFormOpen(false); setTitle('');
  };

  const toggleActive = async (id, current) => {
    if(!user) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'recurringTasks', id), { isActive: !current });
  };

  const deleteRecTask = async(id) => {
    if(!user || !window.confirm("이 반복 할 일을 완전히 삭제하시겠습니까?")) return;
    await deleteDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'recurringTasks', id));
  }

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-stone-800">반복 할 일 관리</h2>
        <button onClick={() => setIsFormOpen(!isFormOpen)} className="bg-stone-800 text-white px-3 py-1.5 rounded-xl text-sm font-medium">
          {isFormOpen ? '닫기' : '+ 새 반복 추가'}
        </button>
      </div>

      {isFormOpen && (
        <form onSubmit={saveTask} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 mb-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-500 mb-1">제목</label>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="예: 단어 50개 외우기" className="w-full border rounded-xl p-3 outline-none"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-500 mb-1">카테고리</label>
            <select value={categoryId} onChange={e=>setCategoryId(e.target.value)} className="w-full border rounded-xl p-3 outline-none bg-white">
              <option value="">선택...</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl">저장하기</button>
        </form>
      )}

      <div className="space-y-3">
        {recurringTasks.map(task => {
          const cat = categories.find(c => c.id === task.categoryId);
          return (
            <div key={task.id} className={`bg-white p-4 rounded-2xl border flex items-center gap-3 transition-opacity ${!task.isActive ? 'opacity-50' : 'shadow-sm'}`}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat?.color || '#ccc' }} />
              <div className="flex-1">
                <div className="text-xs text-stone-400 mb-1">{cat?.name}</div>
                <h3 className={`font-bold text-stone-800 ${!task.isActive && 'line-through'}`}>{task.title}</h3>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleActive(task.id, task.isActive)} className="text-xs px-2 py-1 bg-stone-100 rounded-lg text-stone-600 font-medium hover:bg-stone-200">
                  {task.isActive ? '끄기' : '켜기'}
                </button>
                <button onClick={() => deleteRecTask(task.id)} className="p-1.5 text-stone-400 hover:text-red-500"><Trash2 size={16}/></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const TimeTrackerScreen = ({ user, appId, categories, timeLogs, onLogUpdate }) => {
  const [selectedDate, setSelectedDate] = useState(ProgressService.getTodayStr());
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isEditCategoryOpen, setIsEditCategoryOpen] = useState(false);
  
  const timeBlocks = Array.from({ length: 48 }, (_, i) => i);
  const currentDayLog = timeLogs[selectedDate] || {};

  const updateBlock = async (index, catId) => {
    if (!user) return;
    const newLog = { ...currentDayLog };
    if (!catId) newLog[index] = null;
    else newLog[index] = catId;
    
    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'timeLogs', selectedDate), {
      blocks: newLog, updatedAt: new Date().toISOString()
    }, { merge: true });
    
    onLogUpdate(selectedDate);
  };

  const handlePointerDown = (idx) => { setIsDragging(true); updateBlock(idx, selectedCategoryId); };
  const handlePointerEnter = (idx) => { if (isDragging) updateBlock(idx, selectedCategoryId); };
  const handlePointerUp = () => setIsDragging(false);
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    if (el && el.dataset.index) updateBlock(el.dataset.index, selectedCategoryId);
  };

  return (
    <div className="h-full flex flex-col bg-white select-none">
      <div className="flex justify-between items-center p-4 border-b border-stone-100 bg-white sticky top-0 z-20 shadow-sm">
        <button onClick={() => setSelectedDate(ProgressService.getTodayStr(new Date(selectedDate).getDate() - 1 - new Date().getDate()))} className="p-2 text-stone-400"><ChevronLeft/></button>
        <input 
          type="date" 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-transparent text-xl font-bold text-stone-800 outline-none cursor-pointer text-center"
        />
        <button onClick={() => setSelectedDate(ProgressService.getTodayStr(new Date(selectedDate).getDate() + 1 - new Date().getDate()))} className="p-2 text-stone-400"><ChevronRight/></button>
      </div>

      <div className="p-3 bg-stone-50 border-b flex gap-2 overflow-x-auto no-scrollbar z-20">
        <button 
          onClick={() => setSelectedCategoryId('')}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all ${selectedCategoryId === '' ? 'border-stone-800 bg-white' : 'border-transparent bg-stone-200 text-stone-500'}`}
        >
          지우개 🧽
        </button>
        {categories.map(cat => (
          <button 
            key={cat.id} onClick={() => setSelectedCategoryId(cat.id)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-all shadow-sm text-white`}
            style={{ backgroundColor: cat.color, borderColor: selectedCategoryId === cat.id ? '#1c1917' : 'transparent', transform: selectedCategoryId === cat.id ? 'scale(1.05)' : 'scale(1)' }}
          >
            {cat.name}
          </button>
        ))}
        <button onClick={() => setIsEditCategoryOpen(true)} className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center hover:bg-stone-300 ml-2">
          <Settings size={14} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 relative" onMouseUp={handlePointerUp} onMouseLeave={handlePointerUp} onTouchEnd={handlePointerUp} onTouchCancel={handlePointerUp} onTouchMove={handleTouchMove}>
        <div className="absolute top-0 left-12 bottom-0 w-px bg-stone-200" />
        {timeBlocks.map((blockIdx) => {
          const hour = Math.floor(blockIdx / 2);
          const isHalf = blockIdx % 2 !== 0;
          const catId = currentDayLog[blockIdx];
          const cat = categories.find(c => c.id === catId);
          const bgColor = cat ? cat.color : '#f8fafc';

          return (
            <div key={blockIdx} className="flex group h-10 relative">
              <div className="w-12 pr-2 text-right relative -top-3">
                {!isHalf && <span className="text-[10px] font-bold text-stone-400">{String(hour).padStart(2, '0')}:00</span>}
              </div>
              <div className="flex-1 pl-4 pb-1 relative">
                <div 
                  data-index={blockIdx} onMouseDown={() => handlePointerDown(blockIdx)} onMouseEnter={() => handlePointerEnter(blockIdx)} onTouchStart={() => handlePointerDown(blockIdx)}
                  className="w-full h-full rounded-md border border-white transition-colors cursor-pointer shadow-sm relative overflow-hidden group-hover:brightness-95"
                  style={{ backgroundColor: bgColor }}
                >
                  {catId && <span className="absolute inset-0 flex items-center px-2 text-[10px] font-bold text-white/80 opacity-0 group-hover:opacity-100">{cat?.name}</span>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {isEditCategoryOpen && <CategoryEditModal user={user} appId={appId} categories={categories} onClose={() => setIsEditCategoryOpen(false)} />}
    </div>
  );
};

const CategoryEditModal = ({ user, appId, categories, onClose }) => {
  const [localCats, setLocalCats] = useState([...categories]);
  const [isSaving, setIsSaving] = useState(false);

  const handleNameChange = (id, name) => setLocalCats(prev => prev.map(c => c.id === id ? { ...c, name } : c));
  const handleColorChange = (id, color) => setLocalCats(prev => prev.map(c => c.id === id ? { ...c, color } : c));

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    await Promise.all(localCats.map(cat =>
      updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'categories', cat.id), { name: cat.name, color: cat.color })
    ));
    setIsSaving(false);
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl flex flex-col max-h-[80vh]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-stone-800">카테고리 편집</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 no-scrollbar">
          {localCats.map(cat => (
            <div key={cat.id} className="flex items-center gap-3 bg-stone-50 p-3 rounded-2xl border border-stone-100">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-stone-200 flex-shrink-0 relative">
                <input type="color" value={cat.color} onChange={(e) => handleColorChange(cat.id, e.target.value)} className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer border-0 p-0" />
              </div>
              <input type="text" value={cat.name} onChange={(e) => handleNameChange(cat.id, e.target.value)} className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-stone-700 font-medium" placeholder="카테고리 이름" />
            </div>
          ))}
        </div>

        <button onClick={handleSave} disabled={isSaving} className="w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 disabled:opacity-50">
          {isSaving ? '저장 중...' : '완료'}
        </button>
      </div>
    </div>
  );
};

const StatsScreen = ({ categories, timeLogs }) => {
  const today = ProgressService.getTodayStr();
  const todayLog = timeLogs[today] || {};
  
  const statsMap = {};
  let totalBlocks = 0;
  
  Object.values(todayLog).forEach(catId => {
    if (!catId) return;
    statsMap[catId] = (statsMap[catId] || 0) + 1;
    totalBlocks++;
  });

  const sortedStats = Object.entries(statsMap)
    .sort(([, a], [, b]) => b - a)
    .map(([catId, count]) => ({
      cat: categories.find(c => c.id === catId) || { name: '알수없음', color: '#ccc' },
      hours: count * 0.5,
      percentage: Math.round((count / Math.max(1, totalBlocks)) * 100)
    }));

  return (
    <div className="p-5 space-y-6">
      <h2 className="text-2xl font-bold text-stone-800">오늘의 시간 통계</h2>
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 text-center">
        <p className="text-stone-500 font-medium mb-1">총 기록 시간</p>
        <p className="text-4xl font-bold text-stone-800">{totalBlocks * 0.5}<span className="text-lg text-stone-400 ml-1">시간</span></p>
      </div>

      <div className="bg-white p-5 rounded-3xl shadow-sm border border-stone-100">
        <h3 className="font-bold text-stone-800 mb-4">카테고리별 사용</h3>
        <div className="space-y-4">
          {sortedStats.length === 0 ? (
            <p className="text-center text-stone-400 py-4">아직 기록된 시간이 없습니다.</p>
          ) : (
            sortedStats.map(({ cat, hours, percentage }, idx) => (
              <div key={idx} className="relative">
                <div className="flex justify-between text-sm font-bold text-stone-700 mb-1">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></span>{cat.name}</span>
                  <span>{hours}h ({percentage}%)</span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${percentage}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const ThemeGrowthScreen = ({ stats }) => {
  const duration = stats.themeDuration || 100;
  
  const isDisplayOverride = stats.selectedDisplayThemeId !== null;
  const displayThemeIndex = isDisplayOverride ? THEMES.findIndex(t => t.id === stats.selectedDisplayThemeId) : stats.currentThemeIndex;
  const safeIndex = Math.min(displayThemeIndex, THEMES.length - 1);
  const theme = THEMES[safeIndex];
  
  const isCompletedTheme = stats.currentThemeIndex > safeIndex;
  const progress = isCompletedTheme ? duration : (isDisplayOverride ? duration : stats.currentThemeProgress);
  
  const stageIndex = Math.min(Math.floor((progress / duration) * 5), 4);
  const currentVisual = theme.icons[stageIndex];
  const currentStageName = theme.stages[stageIndex];
  
  const nextStageThreshold = Math.ceil((stageIndex + 1) * (duration / 5));
  const daysToNext = nextStageThreshold - progress;

  return (
    <div className="p-5 h-full flex flex-col items-center pt-10 relative overflow-hidden bg-stone-50">
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-30" style={{ backgroundColor: theme.color }}></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ backgroundColor: theme.color }}></div>

      <div className="bg-white px-5 py-2 rounded-full shadow-sm text-sm font-bold border border-stone-100 mb-6 z-10 flex items-center gap-2" style={{ color: theme.color }}>
        <span>테마 {safeIndex + 1}</span> <span className="text-stone-300">|</span> <span className="text-stone-600">{theme.name}</span>
      </div>

      <div className="w-56 h-56 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-4 border-white z-10 relative mb-8 transition-transform hover:scale-105 duration-300">
        <span className="text-8xl drop-shadow-lg">{currentVisual}</span>
        {stageIndex >= 4 && <div className="absolute inset-0 bg-yellow-200/30 rounded-full blur-xl animate-pulse -z-10"></div>}
      </div>

      <div className="text-center z-10 w-full px-4">
        <h2 className="text-2xl font-bold mb-1 text-stone-800">{stageIndex + 1}단계: {currentStageName}</h2>
        
        {progress >= duration ? (
          <p className="text-emerald-500 font-bold mb-6">마스터한 테마입니다! ✨</p>
        ) : (
          <p className="text-stone-500 text-sm mb-6">다음 변화까지 <span className="font-bold text-stone-700">{daysToNext}일</span> 남음</p>
        )}

        <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100">
          <div className="flex justify-between text-xs font-bold text-stone-500 mb-2 px-1">
            <span>테마 진행도</span>
            <span>{progress} / {duration} 일</span>
          </div>
          <div className="h-4 w-full bg-stone-100 rounded-full overflow-hidden shadow-inner">
            <div className="h-full rounded-full transition-all duration-1000 relative" style={{ width: `${(progress / duration) * 100}%`, backgroundColor: theme.color }}>
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-400 text-left">
            목표 기간: <span className="font-bold text-stone-600">{duration}일 완성 모드</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeCollectionScreen = ({ user, appId, stats }) => {
  const selectDisplayTheme = async (themeId) => {
    if (!user) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'gamestats'), { selectedDisplayThemeId: themeId });
  };
  const clearDisplayTheme = async () => {
    if (!user) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'gamestats'), { selectedDisplayThemeId: null });
  };

  return (
    <div className="p-5 bg-stone-50 min-h-full">
      <div className="mb-6 flex justify-between items-end">
        <div><h2 className="text-2xl font-bold text-stone-800">컬렉션</h2><p className="text-stone-500 text-sm">달성한 테마를 대표로 설정하세요.</p></div>
        {stats.selectedDisplayThemeId && <button onClick={clearDisplayTheme} className="text-xs bg-stone-200 text-stone-600 px-3 py-1.5 rounded-lg font-bold">복귀</button>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {THEMES.map((theme, idx) => {
          const isUnlocked = idx <= stats.currentThemeIndex;
          const isCompleted = idx < stats.currentThemeIndex;
          const isCurrent = idx === stats.currentThemeIndex;
          const isSelected = stats.selectedDisplayThemeId === theme.id || (!stats.selectedDisplayThemeId && isCurrent);

          return (
            <div 
              key={theme.id} onClick={() => isCompleted && selectDisplayTheme(theme.id)}
              className={`relative p-4 rounded-3xl border-2 transition-all ${isUnlocked ? 'bg-white cursor-pointer hover:shadow-md' : 'bg-stone-100/50 border-stone-100 opacity-60'} ${isSelected ? 'border-blue-400 shadow-sm' : 'border-transparent shadow-sm'}`}
            >
              {!isUnlocked && <div className="absolute inset-0 bg-stone-100/30 backdrop-blur-[1px] rounded-3xl flex items-center justify-center z-10"><Lock className="text-stone-400" /></div>}
              <div className="text-4xl mb-3 text-center">{isUnlocked ? theme.icons[4] : "❓"}</div>
              <h3 className="font-bold text-sm text-stone-800 text-center mb-1">{theme.name}</h3>
              <div className="text-center">
                {isCompleted ? <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">마스터</span>
                 : isCurrent ? <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">진행중</span>
                 : <span className="text-[10px] text-stone-400">잠김</span>}
              </div>
              {isSelected && <div className="absolute -top-2 -right-2 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md border-2 border-white">✔</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
};

const ThemeMapScreen = ({ stats }) => {
  const currentIndex = stats.currentThemeIndex;

  return (
    <div className="p-5 relative bg-stone-50 min-h-[120%]">
      <div className="mb-8 bg-white p-5 rounded-3xl shadow-sm border border-stone-100 sticky top-0 z-50">
        <h2 className="text-2xl font-bold text-stone-800 mb-1">월드 맵</h2>
        <p className="text-stone-500 text-sm font-medium">30개의 섬으로 이루어진 대장정</p>
      </div>

      <div className="relative pl-10 space-y-16 pb-20">
        <div className="absolute left-[3.25rem] top-4 bottom-0 w-1 bg-stone-200 rounded-full"></div>
        <div className="absolute left-[3.25rem] top-4 w-1 bg-blue-500 rounded-full transition-all duration-1000" style={{ height: `${(currentIndex / 30) * 100}%`, maxHeight: '100%' }}></div>

        {THEMES.map((theme, idx) => {
          const isPassed = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          const isLocked = idx > currentIndex;
          
          return (
            <div key={theme.id} className="relative flex items-center group">
              <div className={`absolute -left-[1.65rem] w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs z-10 border-4 transition-all ${isPassed ? 'bg-blue-500 text-white border-blue-200' : isCurrent ? 'bg-white text-blue-500 border-blue-400 ring-4 ring-blue-100 scale-110' : 'bg-white text-stone-300 border-stone-200'}`}>
                {isPassed ? <CheckCircle2 size={14}/> : idx + 1}
              </div>
              <div className={`ml-8 p-4 rounded-3xl flex-1 border transition-all flex items-center gap-4 ${isPassed ? 'bg-white border-blue-100 shadow-sm' : isCurrent ? 'bg-white border-blue-300 shadow-md transform scale-[1.02]' : 'bg-stone-50/50 border-stone-100 opacity-60'}`}>
                <div className={`text-4xl ${isLocked ? 'grayscale opacity-50' : ''} drop-shadow-sm`}>{isLocked ? "☁️" : theme.icons[4]}</div>
                <div>
                  <h3 className={`font-bold ${isLocked ? 'text-stone-400' : 'text-stone-800'}`}>{theme.name}</h3>
                  <p className="text-xs text-stone-500 mt-0.5">{isPassed ? "탐험 완료 🌟" : isCurrent ? `현재 진행 중` : "미지의 영역"}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

const SettingsModal = ({ user, appId, stats, onClose }) => {
  const [duration, setDuration] = useState(stats.themeDuration || 100);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);
    let newProgress = stats.currentThemeProgress;
    if (newProgress >= duration) newProgress = duration - 1; 

    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'profile', 'gamestats'), { 
      themeDuration: Number(duration),
      currentThemeProgress: newProgress
    });
    setIsSaving(false);
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-stone-800">성장 설정</h3>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-600"><X size={20} /></button>
        </div>
        
        <div className="mb-6 flex-1 overflow-y-auto no-scrollbar">
          <label className="block text-sm font-bold text-stone-700 mb-2">테마 달성 목표일</label>
          <p className="text-xs text-stone-500 mb-4 leading-relaxed">하나의 테마를 완성하는 데 필요한 일수를 선택하세요. 작심삼일 모드를 선택하면 3일 만에 테마가 최종 진화합니다!</p>
          <div className="space-y-2">
            {[3, 10, 30, 50, 100].map(d => (
              <button 
                key={d} onClick={() => setDuration(d)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all font-medium flex justify-between items-center ${duration === d ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm' : 'border-stone-100 bg-white text-stone-600 hover:bg-stone-50'}`}
              >
                <span>
                  {d}일 완성
                  {d === 3 && <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-lg font-bold">작심삼일 🔥</span>}
                  {d === 100 && <span className="ml-2 text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded-lg font-bold">기본</span>}
                </span>
                {duration === d && <CheckCircle2 size={20} className="text-blue-500" />}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleSave} disabled={isSaving} className="w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 transition-colors disabled:opacity-50">
          {isSaving ? '저장 중...' : '저장하기'}
        </button>
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-14 h-14 transition-colors px-2 ${active ? 'text-stone-800' : 'text-stone-400 hover:text-stone-600'}`}>
    <div className={`mb-1 transition-transform ${active ? 'scale-110' : 'scale-100'}`}>{icon}</div>
    <span className={`text-[10px] font-semibold ${active ? 'opacity-100 text-stone-800 font-bold' : 'opacity-80'}`}>{label}</span>
  </button>
);

const RewardModal = ({ data, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl transform scale-100 animate-in zoom-in-95 duration-300 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 z-10"><X size={20} /></button>
        <div className="text-7xl mb-6 bounce-animation relative z-10">{data.icon}</div>
        <h3 className="text-2xl font-bold text-stone-800 mb-2 relative z-10">{data.title}</h3>
        <p className="text-stone-500 font-medium mb-8 relative z-10 leading-relaxed">{data.message}</p>
        <button onClick={onClose} className="w-full bg-stone-800 text-white font-bold py-4 rounded-2xl hover:bg-stone-700 transition-colors relative z-10 shadow-md">계속하기</button>
      </div>
      <style>{`
        @keyframes bounce { 0%, 100% { transform: translateY(-3%); } 50% { transform: translateY(3%); } }
        .bounce-animation { animation: bounce 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};