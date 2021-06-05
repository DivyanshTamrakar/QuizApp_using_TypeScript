
export type Options = {
    text: string,
    isRight: boolean,

}

export type Question = {
    question: string,
    points: number,
    negativePoint: number,
    options: Options[]

}
export type Quiz = {
    quizName: string,
    playTime: string,
    questions: Question[],


}


export type HeaderProps={
    username:string,
    
}