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
                        <p>この利用規約（以下「本規約」といいます）は、倉林 駿（以下「運営者」といいます）が提供するWebサイト制作・運用サービス「Tebura HP」（以下「本サービス」といいます）の利用条件を定めるものです。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第1条（適用）</h2>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>本規約は、本サービスの利用に関わる一切の関係に適用されます。</li>
                            <li>ユーザーは、本サービスを利用（LINEでのプレビュー依頼を含む）した時点で、本規約に同意したものとみなします。</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第2条（サービス内容）</h2>
                        <p>本サービスは、ユーザーのInstagramアカウント等の情報を参考に、運営者がAIツールおよびWeb構築技術を用いてWebサイトを制作・公開するサービスです。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第3条（利用登録）</h2>
                        <p>ユーザーは、運営者の定める方法（公式LINEへの登録等）により利用登録を行うものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第4条（素材の利用許諾）</h2>
                        <p>ユーザーは、本サービスの利用にあたり、運営者がユーザーのInstagramアカウント等の公開情報を閲覧し、当該情報（画像、テキスト等）を本サービスによるWebサイト制作および運用の目的の範囲内で、以下の行為を行うことを許諾するものとします。</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>ダウンロードおよび保存</li>
                            <li>複製およびサーバーへのアップロード</li>
                            <li>編集（トリミング、サイズ変更、色調補正等）および改変</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第5条（プレビュー機能と契約の成立）</h2>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>ユーザーは、利用料金の支払前に、制作されたWebサイトのプレビューを確認することができます。</li>
                            <li><strong>プレビュー版のWebサイトは、仕上がり確認および購入検討を目的として提供されるものです。プレビュー版のスクリーンショットの商用利用、公開、またはデータ抽出・保存を禁じます。</strong></li>
                            <li>ユーザーがプレビュー内容を確認し、所定の決済手続きを完了した時点で、本サービスの利用契約（売買契約）が成立します。</li>
                            <li>運営者は、一定期間決済が行われないプレビューデータを、予告なく削除する権利を有します。</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第6条（料金および支払い）</h2>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>ユーザーは、本サービスの対価として、別途定められた制作費および月額利用料を支払うものとします。</li>
                            <li>支払済みの料金は、いかなる理由があっても返還されません。</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第7条（納期および引渡し）</h2>
                        <p>本サービスの納品（本番環境としての利用権限付与）は、決済完了後、システムおよび担当者による最終確認を経て行われます。納期は通常、決済完了後3営業日以内とします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第8条（制作仕様および修正について）★重要</h2>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>本サービスは、モバイル端末での表示最適化および安定稼働を優先するため、あらかじめ設計されたレイアウトテンプレートを使用しています。</li>
                            <li><strong>デザインの大幅な変更、ピクセル単位のレイアウト調整、およびシステム仕様外のカスタマイズ要望には、原則として応じかねます。</strong></li>
                            <li>ユーザーは、プレビュー段階で提示されたデザインおよび構成を最終成果物として承諾した上で、契約を行うものとします。</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第9条（禁止事項）</h2>
                        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>本サービスに含まれるデザイン、プログラム等の知的財産権を侵害する行為</li>
                            <li>本サービスによって得られた情報を契約目的外で利用する行為</li>
                            <li>Instagramの利用規約に違反する行為</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第10条（サービス提供の停止等）</h2>
                        <p>運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの提供を停止または中断することができるものとします。</p>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                            <li><strong>連携する外部プラットフォーム（Instagram等）の仕様変更等により、サービスの継続が困難となった場合</strong></li>
                            <li>その他、運営者が本サービスの提供が困難と判断した場合</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第11条（免責事項）</h2>
                        <ol className="list-decimal pl-5 space-y-1">
                            <li><strong>本サービスは、Meta Platforms, Inc.（Instagram）とは独立して運営されています。外部プラットフォームの事情（アカウント凍結、仕様変更等）により、制作されたWebサイトが表示できなくなった場合でも、運営者は一切の責任を負わず、返金義務を負わないものとします。</strong></li>
                            <li>本サービスは最新の技術を用いてコンテンツを構築しますが、生成された文章や情報の完全性・正確性を保証するものではありません。ユーザーは公開前に必ず自身で内容を確認するものとします。</li>
                            <li>運営者は、本サービスの利用に関してユーザーに生じた損害について、運営者の故意または重過失がない限り、責任を負いません。</li>
                        </ol>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第12条（利用規約の変更）</h2>
                        <p>運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>

                        <h2 className="font-bold text-lg text-text mt-8 mb-2">第13条（準拠法・裁判管轄）</h2>
                        <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。</p>

                        <p className="mt-8 text-right">2025年11月23日 制定</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Terms;
