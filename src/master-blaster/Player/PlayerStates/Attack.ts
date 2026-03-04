import { PlayerStates, PlayerAnimations } from "../PlayerController";
import PlayerState from "./PlayerState";
import Input from "../../../Wolfie2D/Input/Input";
import { MBControls } from "../../MBControls";

export default class Attack extends PlayerState {
    

    public onEnter(): void {
        this.parent.velocity.x = 0;
        this.parent.velocity.y = 0;

        this.owner.animation.play(PlayerAnimations.ATTACK);
        let dir = this.parent.faceDir;
        
        
    }

    public update(deltaT: number): void {
        if(!this.owner.animation.isPlaying(PlayerAnimations.ATTACK)){
            this.finished(PlayerStates.IDLE);}
        
    }

    

    public onExit(): Record<string, any> {
        this.owner.animation.stop();
        return {};
    }
}