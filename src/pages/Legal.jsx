import React from 'react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Legal = () => {
    const { t } = useLanguage();
    return (
        <div className="py-20 px-6 md:px-12 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-lg">
                <FadeIn>
                    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-text text-center">特定商取引法に基づく表記</h1>

                    <div className="space-y-8 text-sm md:text-base">
                        <div>
                            <h2 className="font-bold text-lg mb-2">販売業者</h2>
                            <p className="text-text/80">Tebura HP</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">運営責任者</h2>
                            <p className="text-text/80">倉林 駿</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">所在地</h2>
                            <p className="text-text/80">請求があったら遅滞なく開示します</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">電話番号</h2>
                            <p className="text-text/80">請求があったら遅滞なく開示します</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">メールアドレス</h2>
                            <p className="text-text/80">info@tebura-ai.com</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">販売価格</h2>
                            <p className="text-text/80">各商品ページに記載</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">商品代金以外の必要料金</h2>
                            <p className="text-text/80">なし</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">お支払い方法</h2>
                            <p className="text-text/80">クレジットカード決済、銀行振込</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">お支払い時期</h2>
                            <p className="text-text/80">前払い</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">商品の引渡時期</h2>
                            <p className="text-text/80">決済完了後、24時間以内に納品</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-2">返品・交換について</h2>
                            <p className="text-text/80">デジタルコンテンツの性質上、返品・返金はお受けしておりません。</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Legal;
