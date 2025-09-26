import React, { useEffect, useState } from 'react';
import './App.css';
import RegistrationModal from './components/RegistrationModal';
import { initAppAndGetActiveDomain } from 'apuesta-cloud-landing-utils';

interface BonusData {
  amount: number;
  currency: string;
  bonus: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [bonusLog, setBonusLog] = useState<string[]>([]);
  console.log(bonusLog);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [domainData, setDomainData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleBonusClaimed = (event: CustomEvent<BonusData>) => {
      const { amount, currency, bonus, timestamp } = event.detail;
      const logMessage = `🎉 Бонус получен: ${amount} ${currency} + ${bonus} в ${new Date(timestamp).toLocaleString('ru-RU')}`;
      
      setBonusLog(prev => [...prev, logMessage]);
      console.log('🎯 Бонус получен из игрового приложения:', event.detail);
      
      // Показываем модальное окно регистрации при получении бонуса
      setShowRegistrationModal(true);
    };

    // Добавляем обработчик кастомного события
    window.addEventListener('bonusClaimed', handleBonusClaimed as EventListener);
    
    return () => {
      window.removeEventListener('bonusClaimed', handleBonusClaimed as EventListener);
    };
  }, []);

  // Инициализация домена при загрузке
  useEffect(() => {
    const initializeDomain = async () => {
      const initStartTime = new Date().toISOString();
      
      try {
        setIsLoading(true);
        setError(null);
        
        // Инициализируем домен с реальными параметрами от Apuesta.cloud
        const response = await initAppAndGetActiveDomain(
          'https://htzbtz.cc', // redirectorOrigin
          '686a47af' // redirectorCampaignId
        );
        
        const initEndTime = new Date().toISOString();
        const initDuration = new Date(initEndTime).getTime() - new Date(initStartTime).getTime();
        
        setDomainData(response);
      } catch (err) {
        console.log({err});
        setError(err instanceof Error ? err.message : 'Ошибка инициализации домена');
      } finally {
        setIsLoading(false);
      }
    };

    initializeDomain();
  }, []);

  return (
    <div className="App">
      {/* Кнопка для тестирования модального окна */}
      {/* <button
        onClick={() => setShowRegistrationModal(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1001,
          padding: '10px 20px',
          backgroundColor: '#6b46c1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        Открыть регистрацию
      </button> */}

      {/* Лог бонусов */}
      {/* {bonusLog.length > 0 && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          maxWidth: '400px',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>📋 Лог бонусов:</h3>
          {bonusLog.map((log, index) => (
            <p key={index} style={{ 
              margin: '4px 0', 
              fontSize: '12px', 
              lineHeight: '1.4',
              borderLeft: '3px solid #6b46c1',
              paddingLeft: '8px'
            }}>
              {log}
            </p>
          ))}
        </div>
      )} */}

      {/* Модальное окно регистрации */}
      {showRegistrationModal && (
        <RegistrationModal
          onClose={() => setShowRegistrationModal(false)}
          domainData={domainData}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};

export default App;
