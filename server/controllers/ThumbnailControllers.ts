
import { Request, Response } from "express";
import Thumbnail from "../Models/Thumblify.js";
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from "@google/genai";


const stylePrompts = {
    'Bold & Graphic': 'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting, high contrast, click-worthy composition, professional style',
    'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',
    'Minimalist': 'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',
    'Photorealistic': 'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',
    'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
}

const colorSchemeDescriptions = {
    vibrant: 'vibrant and energetic colors, high saturation, bold contrasts, eye-catching palette',
    sunset: 'warm sunset tones, orange pink and purple hues, soft gradients, cinematic glow',
    forest: 'natural green tones, earthy colors, calm and organic palette, fresh atmosphere',
    neon: 'neon glow effects, electric blues and pinks, cyberpunk lighting, high contrast glow',
    purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish mood',
    monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
    ocean: 'cool blue and teal tones, aquatic color palette, fresh and clean atmosphere',
    pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic',
}



export const generateThumbnail = async (req: Request, rest: Response)=>{
    try{
        const {userId} = req.session;
        const {title, prompt: user_prompt, style, aspect_ratio,
            color_scheme, text_overlay
        } = req.body;
const thumbail = await Thumbnail.create({
    userId,
    title,
    prompt_used: user_prompt,
    user_prompt,
    style,
    aspect_ratio,
    color_scheme,
    text_overlay,
    isGenerating: true
})

const model = 'gemini-3-pro-image-preview';

const generationConfig: GenerateContentConfig = {
   maxOutputTokens: 32768,
    temperature: 1,
    topP: 0.95,
    responseModalities: ['IMAGE'],
    imageConfig: {
        aspectRatio: aspect_ratio || '16:9',
        imageSize: '1k'
    },
    safetySettings: [
        {category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF},
        {category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF},
        {category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold:HarmBlockThreshold.OFF},
        {category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF}
    ]
}

let prompt = `Create a ${stylePrompts} for: "${title}"`

    } catch (error){

    }
}