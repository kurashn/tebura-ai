import React from 'react';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
    const { t } = useLanguage();
    return (
        <div className="py-20 px-6 md:px-12 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-lg">
                <FadeIn>
                    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-text text-center">利用規約</h1>

                    <div className="space-y-6 text-sm md:text-base text-text/80">
                        <p>この利用規約（以下，「本規約」といいます。）は，Tebura HP（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第1条（適用）</h2>
                        <p>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第2条（利用登録）</h2>
                        <p>登録希望者が当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第3条（利用料金および支払方法）</h2>
                        <p>ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第4条（禁止事項）</h2>
                        <p>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当社のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</li>
                            <li>当社のサービスの運営を妨害するおそれのある行為</li>
                        </ul>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第5条（本サービスの提供の停止等）</h2>
                        <p>当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                        </ul>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第6条（免責事項）</h2>
                        <p>当社の債務不履行責任は，当社の故意または重過失によらない場合には免責されるものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第7条（準拠法・裁判管轄）</h2>
                        <p>本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Terms;
