import {window} from 'vscode';

export const showCodioNameInputBox = async () => await window.showInputBox({prompt: "Give your codio a name:"});
export const showPlayFromInputBox = async (player) => await window.showInputBox({prompt: `Choose when to start from in seconds. Full Length is ${player.codioLength / 1000}`});
export const MESSAGES = {
    startingToRecord : 'Starting to record',
    abortRecording : 'Aborted Recording.',
    savingRecording : 'Saving recording...',
    recordingSaved : 'Recording saved.',
    cantPlayWhileRecording : 'Cant play Codio while recording',
    codioStart : 'Codio is about to start..',
    stopCodio : 'Stopping current codio..',
    codioPaused : 'Paused Paused.',
    alreadyPlaying : 'You already have a Codio playing.',
    invalidNumber : `Number is invalid`,
    noActiveCodio : "You don't have an active Codio",
    windowsNotSupported: "Unfortunately, Codio Format does not work on Windows.",
    ffmpegNotAvailable: `Looks like you haven't installed ffmpeg, which is required for Codio to work.
     You can install it with brew: "brew install ffmpeg"`
};

export const showMessage = window.showInformationMessage;


