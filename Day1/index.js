"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const filePath = "puzzle.txt";
const file = fs.readFileSync(filePath, "utf-8");
const lines = file.split("\n");
const list1 = [];
const list2 = [];
lines.forEach((element) => {
    const [a, b] = element.split("   ");
    list1.push(Number(a));
    list2.push(Number(b));
});
function calculateTotalDistance() {
    list1.sort();
    list2.sort();
    let totalDistance = 0;
    list1.forEach((element, index) => {
        totalDistance += Math.abs(Number(element) - Number(list2[index]));
    });
    console.log(totalDistance);
}
function calculateSimilarityScore() {
    let similarityScore = 0;
    list1.forEach((elementL1) => {
        let numberOfSimilarNumbers = 0;
        list2.forEach((elementL2) => {
            if (elementL1 === elementL2)
                numberOfSimilarNumbers++;
        });
        similarityScore += elementL1 * numberOfSimilarNumbers;
    });
    console.log(similarityScore);
}
calculateTotalDistance();
calculateSimilarityScore();
//# sourceMappingURL=index.js.map