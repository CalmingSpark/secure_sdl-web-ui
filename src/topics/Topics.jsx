import React, {useState} from 'react';
import TopicItem from "../components/UI/topicItem/TopicItem";
import cl from "./Topics.module.css";

const Topics = () => {
    const [topics, setTopics] = useState(
        [
            {
                value: "Без применения инструментов",
                description: "Без инструментов",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            },
            {
                value: "Сканирование заимствованных компоненов",
                description: "Без инструментов",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            },
            {
                value: "Unit-тестирование",
                description: "Без инструментов",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            },
            {
                value: "Статический анализ",
                description: "Стати́ческий ана́лиз ко́да (англ. static code analysis) — анализ программного обеспечения, производимый (в отличие от динамического анализа) без реального выполнения исследуемых программ. В большинстве случаев анализ производится над какой-либо версией исходного кода, хотя иногда анализу подвергается какой-нибудь вид объектного кода, например P-код или код на MSIL. Термин обычно применяют к анализу, производимому специальным программным обеспечением (ПО), тогда как ручной анализ называют «program understanding», «program comprehension» (пониманием или постижением программы).",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            },
            {
                value: "Фаззинг-тестирование",
                description: "Фа́ззинг (англ. fuzzing) — техника тестирования программного обеспечения, часто автоматическая или полуавтоматическая, заключающаяся в передаче приложению на вход неправильных, неожиданных или случайных данных. Предметом интереса являются падения и зависания, нарушения внутренней логики и проверок в коде приложения, утечки памяти, вызванные такими данными на входе. Фаззинг является разновидностью выборочного тестирования (англ. random testing), часто используемого для проверки проблем безопасности в программном обеспечении и компьютерных системах.",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            },
            {
                value: "Проверка корректности проведания анализа",
                description: "Важно не только проводить исследования, но также быть уверенным, что проведённые испытания дают корректный результат",
                link: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D0%B4%D0%B0"
            }

        ]
    )
    return (
        <div className={cl.topics}>
            {topics.map(topic =>
                <TopicItem value={topic.value} description={topic.description} link={topic.link} key={topic.value}/>
            )}
        </div>
    );
};
export default Topics;