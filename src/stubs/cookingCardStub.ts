import { Modes } from "src/app/enums/modes.enum";
import { ICookingCard } from "src/app/interfaces/cooking-card.interface";

export const cookingCardStub: ICookingCard[] = [
    {
        cookingCardId: 1,
        cookingCardName: 'Beef Jerky',
        cookingTime: 2,
        cookingTemperature: 150,
        rack: false,
        mode: Modes.AIR_FRY,
        numbBasket: 1,
    },
    {
        cookingCardId: 2,
        cookingCardName: 'Pizza',
        cookingTime: 20,
        cookingTemperature: 200,
        rack: false,
        mode: Modes.BAKE,
        numbBasket: 1,
    },
    {
        cookingCardId: 3,
        cookingCardName: 'Tenders',
        cookingTime: 60,
        cookingTemperature: 300,
        rack: false,
        mode: Modes.ROAST,
        numbBasket: 1,
    }
]