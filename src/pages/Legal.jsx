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

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm md:text-base text-left border-collapse">
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">販売業者</th>
                                    <td className="py-4 text-text/80">倉林 駿</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">運営統括責任者</th>
                                    <td className="py-4 text-text/80">倉林 駿</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">所在地</th>
                                    <td className="py-4 text-text/80">請求があったら遅滞なく開示します</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">電話番号</th>
                                    <td className="py-4 text-text/80">請求があったら遅滞なく開示します</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">メールアドレス</th>
                                    <td className="py-4 text-text/80">taburahp@gmail.com</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">販売価格</th>
                                    <td className="py-4 text-text/80">サイト内および決済ページに表示された金額（表示価格は税込です）</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">商品代金以外の必要料金</th>
                                    <td className="py-4 text-text/80">
                                        ・インターネット接続料金、通信料金<br />
                                        ・独自ドメイン等のオプション料金（希望者のみ）
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">お支払方法</th>
                                    <td className="py-4 text-text/80">クレジットカード決済</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">お支払時期</th>
                                    <td className="py-4 text-text/80">
                                        <strong>【制作費（買い切り）】</strong><br />
                                        プレビュー確認後、本申込み時にお支払いいただきます。<br /><br />
                                        <strong>【月額プラン（サブスクリプション）】</strong><br />
                                        初回お申込み時に初月分が決済され、以降毎月同日に自動決済されます。
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">引渡し時期</th>
                                    <td className="py-4 text-text/80">
                                        決済完了後、システムおよび担当者による最終確認を経て、本番環境としての利用権限を付与し納品とします。<br />
                                        （通常、決済後3営業日以内）
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 pr-8 font-bold text-text whitespace-nowrap align-top">返品・交換・キャンセル</th>
                                    <td className="py-4 text-text/80">
                                        <strong>【返品・返金について】</strong><br />
                                        デジタルコンテンツの性質上、決済完了後のお客様都合による返品・返金・キャンセルは一切お受けできません。プレビューにて仕上がりを十分にご確認の上でお申し込みください。<br /><br />
                                        <strong>【解約について】</strong><br />
                                        月額プランはいつでも解約可能です。次回更新日の3日前までに公式LINEよりお申し出ください。期間途中の解約による日割り返金は行いません。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Legal;
