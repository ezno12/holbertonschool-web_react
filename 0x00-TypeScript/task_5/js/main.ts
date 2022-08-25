export interface MajorCredits {
    credits: number,
    brand: "major brand"
}

export interface MinorCredits {
    credits: number,
    brand: "minor brand"
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, brand: "major brand"}
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
    return {credits: subject1.credits + subject2.credits, brand: "minor brand"}
}
