// Premiere SEARCH data.js
// Premiere Pro 26.x 基準
// effects / transitions / audio / tools / shortcuts

const effects = [

  /* =========================
     固定エフェクト
     ========================= */

  {
    name: "Motion",
    kind: "effect",
    type: "固定エフェクト",
    description: "クリップの位置・スケール・回転などを調整する固定エフェクト。",
    tags: ["モーション", "位置", "拡大", "回転"],
    purposes: ["位置調整", "拡大縮小", "回転"],
    steps: "エフェクトコントロールでPosition、Scale、Rotationなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Opacity",
    kind: "effect",
    type: "固定エフェクト",
    description: "クリップの透明度を調整する固定エフェクト。",
    tags: ["不透明度", "透明", "フェード"],
    purposes: ["透明度調整", "フェード"],
    steps: "エフェクトコントロールでOpacityを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Time Remapping",
    kind: "effect",
    type: "固定エフェクト",
    description: "時間の流れを変化させてクリップの速度を調整する固定エフェクト。",
    tags: ["速度", "時間", "スピード"],
    purposes: ["速度変更", "スピードランプ", "速度変化"],
    steps: "エフェクトコントロールでTime Remappingをキーフレーム編集。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Volume",
    kind: "audio",
    type: "固定オーディオ",
    description: "クリップの音量を調整する固定オーディオ項目。",
    tags: ["音", "音量", "ボリューム"],
    purposes: ["音量調整", "フェード"],
    steps: "エフェクトコントロールまたはタイムラインでVolumeを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     ビデオエフェクト
     ========================= */

  {
    name: "Bokeh Blur",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "ボケ味のあるぼかしを作る。",
    tags: ["ぼかし", "ボケ", "被写界深度"],
    purposes: ["背景ぼかし", "光のボケ"],
    steps: "Bokeh Blurを適用してぼかしを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Compound Blur",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "別のレイヤーやマットを基準にしてぼかしを制御する。",
    tags: ["ぼかし", "マット", "合成"],
    purposes: ["選択的ぼかし", "深度表現"],
    steps: "Compound Blurを適用しブラー量と参照レイヤーを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Directional Blur",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "指定した方向に映像をぼかす。",
    tags: ["ぼかし", "速度", "モーション"],
    purposes: ["スピード感", "方向性ブラー"],
    steps: "Directional Blurを適用して方向とBlur Lengthを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Focus Blur",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "ピントが外れたようなぼかしを作る。",
    tags: ["ぼかし", "フォーカス", "ピント"],
    purposes: ["ピント演出", "背景ぼかし"],
    steps: "Focus Blurを適用して焦点とぼかしを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Gaussian Blur",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "映像や文字を滑らかにぼかす定番ブラー。",
    tags: ["ぼかし", "ブラー", "背景"],
    purposes: ["背景ぼかし", "文字を柔らかく", "光を広げる"],
    steps: "Gaussian Blurを適用してBlurrinessを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Sharpen",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "映像の輪郭を強調してシャープにする。",
    tags: ["シャープ", "画質", "輪郭"],
    purposes: ["映像をくっきり", "輪郭強調"],
    steps: "Sharpenを適用してAmountを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Unsharp Mask",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "エッジを強調して映像をより鮮明にする。",
    tags: ["シャープ", "画質", "輪郭"],
    purposes: ["映像を鮮明に", "ディテール強調"],
    steps: "Unsharp Maskを適用してAmountとRadiusを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Reduce Interlace Flicker",
    kind: "effect",
    type: "ぼかし・シャープ",
    description: "インターレース素材のちらつきを軽減する。",
    tags: ["インターレース", "ちらつき", "補正"],
    purposes: ["ちらつき低減", "古い映像補正"],
    steps: "Reduce Interlace Flickerを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "ASC CDL",
    kind: "effect",
    type: "カラー補正",
    description: "Slope、Offset、Power、Saturationを使って色を調整する。",
    tags: ["色", "カラー", "グレーディング", "ASC CDL"],
    purposes: ["カラーグレーディング", "色補正"],
    steps: "ASC CDLを適用して各パラメーターを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Brightness & Contrast",
    kind: "effect",
    type: "カラー補正",
    description: "映像の明るさとコントラストを調整する。",
    tags: ["色", "明るさ", "コントラスト"],
    purposes: ["明るさ調整", "コントラスト調整"],
    steps: "Brightness & Contrastを適用してBrightnessとContrastを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Lumetri Color",
    kind: "effect",
    type: "カラー補正",
    description: "露出・コントラスト・色温度・彩度などを総合的に調整する。",
    tags: ["Lumetri", "色", "カラー", "グレーディング"],
    purposes: ["カラー補正", "カラーグレーディング"],
    steps: "Lumetri Colorを適用しLumetriカラーで各項目を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Tint",
    kind: "effect",
    type: "カラー補正",
    description: "映像全体を指定した色味へ変換する。",
    tags: ["色", "カラー", "色味"],
    purposes: ["単色化", "色味変更"],
    steps: "Tintを適用してMap Black ToとMap White Toを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Video Limiter",
    kind: "effect",
    type: "カラー補正",
    description: "映像信号の明るさや色の範囲を制限する。",
    tags: ["色", "リミッター", "放送"],
    purposes: ["信号範囲調整"],
    steps: "Video Limiterを適用して制限値を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Vignette",
    kind: "effect",
    type: "カラー補正",
    description: "映像周辺を暗くして中央の被写体を目立たせる。",
    tags: ["色", "ビネット", "周辺減光"],
    purposes: ["中央を目立たせる", "映画風"],
    steps: "Lumetri ColorのVignetteからAmountなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Corner Pin",
    kind: "effect",
    type: "ディストーション",
    description: "映像の四隅を個別に動かしてパースを合わせる。",
    tags: ["変形", "パース", "四隅"],
    purposes: ["画面を四隅に合わせる", "パース変形"],
    steps: "Corner Pinを適用して四隅を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Lens Distortion",
    kind: "effect",
    type: "ディストーション",
    description: "レンズによる歪みのような変形を加える。",
    tags: ["歪み", "レンズ", "魚眼"],
    purposes: ["魚眼風", "画面歪み"],
    steps: "Lens Distortionを適用してCurvatureを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Mirror",
    kind: "effect",
    type: "ディストーション",
    description: "映像を指定方向に鏡像反転する。",
    tags: ["反転", "ミラー", "左右反転"],
    purposes: ["左右反転", "鏡演出"],
    steps: "Mirrorを適用して反転方向を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Spherize",
    kind: "effect",
    type: "ディストーション",
    description: "映像を球面状に歪ませる。",
    tags: ["歪み", "球面", "立体"],
    purposes: ["球面歪み", "レンズ演出"],
    steps: "Spherizeを適用してAmountなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Turbulent Displace",
    kind: "effect",
    type: "ディストーション",
    description: "映像を不規則に波打たせて歪ませる。",
    tags: ["歪み", "波", "変形"],
    purposes: ["画面歪み", "ホラー", "グニャグニャ"],
    steps: "Turbulent Displaceを適用してAmountとSizeを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Rotation",
    kind: "effect",
    type: "ディストーション",
    description: "映像を回転させる。",
    tags: ["回転", "変形"],
    purposes: ["回転演出", "画面回転"],
    steps: "Rotationを適用して角度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Warp Stabilizer",
    kind: "effect",
    type: "ディストーション",
    description: "手ブレを解析して映像を安定させる。",
    tags: ["手ブレ補正", "安定化"],
    purposes: ["手ブレ補正", "歩き撮り補正"],
    steps: "Warp Stabilizerを適用して解析し、Smoothnessなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Wave Warp",
    kind: "effect",
    type: "ディストーション",
    description: "映像を波状に変形する。",
    tags: ["波", "歪み", "変形"],
    purposes: ["波打ち", "液体風"],
    steps: "Wave Warpを適用してWave Height、Widthなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "4-Color Gradient",
    kind: "effect",
    type: "生成",
    description: "4つの色を使ったグラデーションを生成する。",
    tags: ["グラデーション", "色", "背景"],
    purposes: ["背景生成", "カラー背景"],
    steps: "4-Color Gradientを適用して4色と位置を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Monochrome",
    kind: "effect",
    type: "イメージコントロール",
    description: "映像をモノクロ調にする。",
    tags: ["モノクロ", "白黒", "色"],
    purposes: ["白黒映像", "色をなくす"],
    steps: "Monochromeを適用して設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Channel Mix",
    kind: "effect",
    type: "イメージコントロール",
    description: "RGBなどのカラーチャンネルを混ぜ合わせて色を調整する。",
    tags: ["RGB", "チャンネル", "色"],
    purposes: ["カラー加工", "チャンネル調整"],
    steps: "Channel Mixを適用して各チャンネルを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Color Pass",
    kind: "effect",
    type: "イメージコントロール",
    description: "指定した色だけを残して他をモノクロ化する。",
    tags: ["色", "モノクロ", "色抽出"],
    purposes: ["特定色を残す", "カラー演出"],
    steps: "Color Passを適用して残す色を指定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Color Replace",
    kind: "effect",
    type: "イメージコントロール",
    description: "指定した色を別の色へ置き換える。",
    tags: ["色変更", "カラー", "置換"],
    purposes: ["特定色変更", "色差し替え"],
    steps: "Color Replaceを適用して対象色と置換色を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Gamma Correction",
    kind: "effect",
    type: "イメージコントロール",
    description: "中間調を中心に映像の明るさを調整する。",
    tags: ["ガンマ", "明るさ", "色"],
    purposes: ["中間調補正"],
    steps: "Gamma Correctionを適用してGammaを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Invert",
    kind: "effect",
    type: "イメージコントロール",
    description: "映像の色を反転する。",
    tags: ["反転", "ネガ", "色"],
    purposes: ["色反転", "特殊演出"],
    steps: "Invertを適用してチャンネルなどを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Rounded Crop",
    kind: "effect",
    type: "イメージコントロール",
    description: "映像を角丸の形に切り抜く。",
    tags: ["角丸", "クロップ", "マスク"],
    purposes: ["角丸画面", "画面切り抜き"],
    steps: "Rounded Cropを適用して範囲と角丸を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Blur",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像向けのぼかしを適用する。",
    tags: ["VR", "ぼかし"],
    purposes: ["360度映像のぼかし"],
    steps: "VR Blurを適用してぼかし量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Chromatic Aberrations",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像に色収差を加える。",
    tags: ["VR", "色収差", "RGB"],
    purposes: ["VR色収差"],
    steps: "VR Chromatic Aberrationsを適用して強度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Color Gradients",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像にグラデーションカラーを追加する。",
    tags: ["VR", "グラデーション", "色"],
    purposes: ["360度カラー演出"],
    steps: "VR Color Gradientsを適用して色と位置を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR De-Noise",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像のノイズを軽減する。",
    tags: ["VR", "ノイズ除去"],
    purposes: ["VR映像のノイズ低減"],
    steps: "VR De-Noiseを適用して処理量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Digital Glitch",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像にデジタルグリッチを加える。",
    tags: ["VR", "グリッチ", "デジタル"],
    purposes: ["360度グリッチ"],
    steps: "VR Digital Glitchを適用してパラメーターを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Fractal Noise",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度空間用のフラクタルノイズを生成する。",
    tags: ["VR", "ノイズ", "フラクタル"],
    purposes: ["360度テクスチャ", "ノイズ生成"],
    steps: "VR Fractal Noiseを適用してノイズ設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Glow",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像の明るい部分にグローを加える。",
    tags: ["VR", "光", "発光"],
    purposes: ["360度グロー"],
    steps: "VR Glowを適用してGlow量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Plane to Sphere",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "平面映像を球面空間へ変換する。",
    tags: ["VR", "球面", "投影"],
    purposes: ["平面を360度空間へ"],
    steps: "VR Plane to Sphereを適用して投影を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Projection",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像の投影方法を調整する。",
    tags: ["VR", "投影"],
    purposes: ["360度投影調整"],
    steps: "VR Projectionを適用して投影設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Rotate Sphere",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像の球面を回転させる。",
    tags: ["VR", "回転"],
    purposes: ["360度映像回転"],
    steps: "VR Rotate Sphereを適用して回転を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Sharpen",
    kind: "effect",
    type: "イマーシブビデオ",
    description: "360度映像のディテールを強調する。",
    tags: ["VR", "シャープ"],
    purposes: ["360度映像の鮮明化"],
    steps: "VR Sharpenを適用して強度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Alpha Channel Key",
    kind: "effect",
    type: "キーイング",
    description: "アルファチャンネルを利用して映像を抜く。",
    tags: ["アルファ", "キーイング", "透明"],
    purposes: ["アルファで抜く", "透明合成"],
    steps: "Alpha Channel Keyを適用してチャンネルを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Color Key",
    kind: "effect",
    type: "キーイング",
    description: "指定した色を透明にする。",
    tags: ["キーイング", "透明", "色"],
    purposes: ["背景を抜く", "色を消す"],
    steps: "Color Keyを適用してKey Colorを指定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Logo Cutout",
    kind: "effect",
    type: "キーイング",
    description: "ロゴ素材の切り抜きに使用するキーイングエフェクト。",
    tags: ["ロゴ", "マスク", "キーイング"],
    purposes: ["ロゴの切り抜き"],
    steps: "Logo Cutoutを適用して対象を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Luminance Key",
    kind: "effect",
    type: "キーイング",
    description: "明るさを基準に映像の一部を透明化する。",
    tags: ["ルミナンス", "キーイング", "合成"],
    purposes: ["明るさで抜く", "光素材合成"],
    steps: "Luminance Keyを適用してThresholdなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Track Matte Key",
    kind: "effect",
    type: "キーイング",
    description: "別トラックの映像をマットとして使用して合成する。",
    tags: ["マスク", "合成", "キーイング"],
    purposes: ["文字抜き", "マット合成"],
    steps: "Track Matte Keyを適用してマットに使用するトラックを指定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Ultra Key",
    kind: "effect",
    type: "キーイング",
    description: "指定色を抜いて透明化するクロマキー。",
    tags: ["クロマキー", "グリーンバック", "背景透過"],
    purposes: ["グリーンバック", "人物切り抜き"],
    steps: "Ultra Keyを適用してKey Colorを指定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Echo Glow",
    kind: "effect",
    type: "ライト・グロー",
    description: "発光と残光を組み合わせた光の演出を作る。",
    tags: ["光", "グロー", "残光"],
    purposes: ["発光演出", "残光"],
    steps: "Echo Glowを適用して発光量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Edge Glow",
    kind: "effect",
    type: "ライト・グロー",
    description: "映像の輪郭にグローを加える。",
    tags: ["光", "グロー", "輪郭"],
    purposes: ["輪郭発光", "ネオン"],
    steps: "Edge Glowを適用して強度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Glint",
    kind: "effect",
    type: "ライト・グロー",
    description: "ハイライトにきらめく光を加える。",
    tags: ["光", "キラキラ", "ハイライト"],
    purposes: ["光のきらめき"],
    steps: "Glintを適用して光の強さや方向を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Light Leak",
    kind: "effect",
    type: "ライト・グロー",
    description: "フィルムの光漏れのような演出を加える。",
    tags: ["光", "光漏れ", "フィルム"],
    purposes: ["光漏れ", "フィルム演出"],
    steps: "Light Leakを適用して光量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "RGB Split",
    kind: "effect",
    type: "ライト・グロー",
    description: "RGBチャンネルを分離して色ずれを作る。",
    tags: ["RGB", "色ずれ", "グリッチ"],
    purposes: ["RGBずらし", "グリッチ"],
    steps: "RGB Splitを適用してRGBの分離量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Volumetric Rays",
    kind: "effect",
    type: "ライト・グロー",
    description: "ボリューム感のある光線を生成する。",
    tags: ["光線", "ボリューム", "光"],
    purposes: ["光の筋", "ゴッドレイ"],
    steps: "Volumetric Raysを適用して方向と強度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Wonder Glow",
    kind: "effect",
    type: "ライト・グロー",
    description: "強い発光感を作るグローエフェクト。",
    tags: ["光", "グロー", "発光"],
    purposes: ["強い発光", "ハイライト演出"],
    steps: "Wonder Glowを適用して発光量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Noise",
    kind: "effect",
    type: "ノイズ・グレイン",
    description: "映像にランダムなノイズを追加する。",
    tags: ["ノイズ", "粒子", "フィルム"],
    purposes: ["フィルム風", "ざらつき", "質感追加"],
    steps: "Noiseを適用してノイズ量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Basic 3D",
    kind: "effect",
    type: "パースペクティブ",
    description: "映像を3D空間上にあるように回転・傾斜させる。",
    tags: ["3D", "立体", "回転"],
    purposes: ["立体表現", "カード風演出"],
    steps: "Basic 3Dを適用して位置や回転を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Drop Shadow",
    kind: "effect",
    type: "パースペクティブ",
    description: "映像や文字の背後に影を追加する。",
    tags: ["影", "文字", "立体感"],
    purposes: ["文字の影", "立体感"],
    steps: "Drop Shadowを適用してOpacity、Distance、Softnessなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Long Shadow",
    kind: "effect",
    type: "パースペクティブ",
    description: "長く伸びる影を作る。",
    tags: ["影", "長い影", "立体感"],
    purposes: ["長い影", "タイトル演出"],
    steps: "Long Shadowを適用して影の長さを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Brush Strokes",
    kind: "effect",
    type: "スタイライズ",
    description: "映像をブラシで描いたような見た目にする。",
    tags: ["ブラシ", "絵画", "加工"],
    purposes: ["絵画風", "手描き風"],
    steps: "Brush Strokesを適用してブラシ設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Color Emboss",
    kind: "effect",
    type: "スタイライズ",
    description: "映像にエンボス加工のような立体感を加える。",
    tags: ["エンボス", "立体", "加工"],
    purposes: ["立体加工", "特殊演出"],
    steps: "Color Embossを適用して方向や強度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Find Edges",
    kind: "effect",
    type: "スタイライズ",
    description: "映像の輪郭を抽出して線画風にする。",
    tags: ["輪郭", "線画", "エッジ"],
    purposes: ["線画風", "輪郭抽出"],
    steps: "Find Edgesを適用してBlend With Originalなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Mosaic Effect",
    kind: "effect",
    type: "スタイライズ",
    description: "映像をモザイク状に加工する。",
    tags: ["モザイク", "ピクセル"],
    purposes: ["顔隠し", "ピクセル化"],
    steps: "Mosaic Effectを適用してブロックサイズを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Posterization Effect",
    kind: "effect",
    type: "スタイライズ",
    description: "色数を減らしてポスターのような見た目にする。",
    tags: ["ポスタリゼーション", "色数", "アート"],
    purposes: ["色数削減", "アート表現"],
    steps: "Posterization Effectを適用して設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Roughen Edges",
    kind: "effect",
    type: "スタイライズ",
    description: "映像の輪郭を荒らして加工感を出す。",
    tags: ["エッジ", "荒れ", "加工"],
    purposes: ["紙っぽい縁", "古い映像風"],
    steps: "Roughen Edgesを適用してEdge設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Strobe",
    kind: "effect",
    type: "スタイライズ",
    description: "映像を点滅させるストロボ演出。",
    tags: ["点滅", "ストロボ", "フラッシュ"],
    purposes: ["点滅演出", "ビート演出"],
    steps: "Strobeを適用して点滅間隔などを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Posterization Time",
    kind: "effect",
    type: "時間",
    description: "映像のフレームレートを下げたような動きを作る。",
    tags: ["低FPS", "カクカク", "アニメ"],
    purposes: ["コマ落ち", "低FPS表現"],
    steps: "Posterization Timeを適用してFrame Rateを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "3D Rotation",
    kind: "effect",
    type: "トランスフォーム",
    description: "映像に3D回転を加える。",
    tags: ["3D", "回転", "モーション"],
    purposes: ["3D回転"],
    steps: "3D Rotationを適用して回転値を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Auto Reframe",
    kind: "effect",
    type: "トランスフォーム",
    description: "画角を分析して縦横比に合わせて自動的にリフレームする。",
    tags: ["自動", "リフレーム", "縦動画"],
    purposes: ["画角自動調整", "縦横変換"],
    steps: "Auto Reframeを適用してターゲット比率を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Camera Shake",
    kind: "effect",
    type: "トランスフォーム",
    description: "カメラが揺れているような動きを加える。",
    tags: ["揺れ", "カメラ", "モーション"],
    purposes: ["手持ちカメラ風", "画面揺れ"],
    steps: "Camera Shakeを適用して揺れ量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Expand Selection",
    kind: "effect",
    type: "トランスフォーム",
    description: "選択領域を拡張する。",
    tags: ["拡張", "選択", "マスク"],
    purposes: ["領域拡張"],
    steps: "Expand Selectionを適用して拡張量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Horizontal Flip",
    kind: "effect",
    type: "トランスフォーム",
    description: "映像を左右反転する。",
    tags: ["左右反転", "反転"],
    purposes: ["左右反転"],
    steps: "Horizontal Flipを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Move",
    kind: "effect",
    type: "トランスフォーム",
    description: "要素をフレーム内で移動させる。",
    tags: ["移動", "モーション"],
    purposes: ["画面移動"],
    steps: "Moveを適用して移動方向と距離を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Offset",
    kind: "effect",
    type: "トランスフォーム",
    description: "映像をオフセットして位置をずらす。",
    tags: ["オフセット", "移動", "ループ"],
    purposes: ["横スクロール", "テクスチャループ"],
    steps: "Offsetを適用して位置を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Reduce",
    kind: "effect",
    type: "トランスフォーム",
    description: "要素を縮小する。",
    tags: ["縮小", "サイズ"],
    purposes: ["要素縮小"],
    steps: "Reduceを適用して縮小量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Spacer",
    kind: "effect",
    type: "トランスフォーム",
    description: "要素間に意図的な間隔を作る。",
    tags: ["間隔", "レイアウト"],
    purposes: ["要素間隔調整"],
    steps: "Spacerを適用して間隔を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Bar Spin",
    kind: "effect",
    type: "トランスフォーム",
    description: "バー状の要素を回転させる。",
    tags: ["回転", "バー", "モーション"],
    purposes: ["回転演出"],
    steps: "Bar Spinを適用して回転設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Vertical Flip",
    kind: "effect",
    type: "トランスフォーム",
    description: "映像を上下反転する。",
    tags: ["上下反転", "反転"],
    purposes: ["上下反転"],
    steps: "Vertical Flipを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Wiggle",
    kind: "effect",
    type: "トランスフォーム",
    description: "ランダムで揺れるような動きを加える。",
    tags: ["揺れ", "ランダム", "モーション"],
    purposes: ["ランダムな動き", "揺れ演出"],
    steps: "Wiggleを適用して揺れの量と速度を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Auto Align",
    kind: "effect",
    type: "ユーティリティ",
    description: "ビジュアル要素を自動的に整列する。",
    tags: ["自動整列", "レイアウト"],
    purposes: ["要素自動整列"],
    steps: "Auto Alignを適用して整列方法を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Cineon Converter",
    kind: "effect",
    type: "ユーティリティ",
    description: "Cineon系素材の色変換に使用する。",
    tags: ["Cineon", "カラー", "変換"],
    purposes: ["ログ素材変換", "フィルム変換"],
    steps: "Cineon Converterを適用して変換設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Copy",
    kind: "effect",
    type: "ユーティリティ",
    description: "入力映像をコピーして使用する。",
    tags: ["コピー", "複製"],
    purposes: ["映像複製"],
    steps: "Copyを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Metadata & Timecode Burn-in",
    kind: "effect",
    type: "ユーティリティ",
    description: "タイムコードやファイル情報などのメタデータを映像へ焼き込む。",
    tags: ["タイムコード", "メタデータ", "焼き込み"],
    purposes: ["タイムコード表示", "メタデータ表示"],
    steps: "Metadata & Timecode Burn-inを適用して表示項目を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Simple Text",
    kind: "effect",
    type: "ユーティリティ",
    description: "映像にシンプルなテキストを追加する。",
    tags: ["文字", "テキスト", "字幕"],
    purposes: ["簡易テキスト表示"],
    steps: "Simple Textを適用して文字と位置を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Stroke",
    kind: "effect",
    type: "ユーティリティ",
    description: "マスクや領域の境界に線を追加する。",
    tags: ["線", "境界", "輪郭"],
    purposes: ["輪郭線", "マスク線"],
    steps: "Strokeを適用して色や幅を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     モダンエフェクト
     ========================= */

  {
    name: "Clone FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "ロゴや映像などの要素を複製してタイミングをずらす。",
    tags: ["クローン", "複製", "アニメーション"],
    purposes: ["要素複製", "複製アニメーション"],
    steps: "Clone FXを適用して複製設定を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Channel Mix FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "RGB、HSV、YUV空間でカラーチャンネルをミックスする。",
    tags: ["RGB", "HSV", "YUV", "カラー"],
    purposes: ["高度なチャンネルミックス"],
    steps: "Channel Mix FXを適用してチャンネルを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Auto Align FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "タイトルやロゴなどの要素を自動配置する。",
    tags: ["自動整列", "レイアウト"],
    purposes: ["タイトル整列", "ロゴ整列"],
    steps: "Auto Align FXを適用して整列設定を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "RGB Split FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "RGBチャンネルを分離して色ずれを作る。",
    tags: ["RGB", "色ずれ", "グリッチ"],
    purposes: ["RGB分離", "グリッチ"],
    steps: "RGB Split FXを適用して分離量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Glint FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "光のきらめきを作る。",
    tags: ["光", "きらめき"],
    purposes: ["光のきらめき"],
    steps: "Glint FXを適用して光量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Light Leak FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "光漏れのような演出を作る。",
    tags: ["光漏れ", "光"],
    purposes: ["光漏れ演出"],
    steps: "Light Leak FXを適用して強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Echo Glow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "光る残像のような演出を作る。",
    tags: ["残光", "グロー"],
    purposes: ["残光発光"],
    steps: "Echo Glow FXを適用して発光量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Bokeh Blur FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "スタイライズされたボケぼかしを作る。",
    tags: ["ボケ", "ぼかし"],
    purposes: ["ボケ表現"],
    steps: "Bokeh Blur FXを適用してボケを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Compound Blur FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "マットなどを使って複雑なぼかしを作る。",
    tags: ["ぼかし", "マット"],
    purposes: ["選択的ぼかし"],
    steps: "Compound Blur FXを適用してマットと強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Edge Glow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "輪郭に発光を加える。",
    tags: ["輪郭", "グロー"],
    purposes: ["輪郭発光"],
    steps: "Edge Glow FXを適用して発光量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Wonder Glow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "強いグローを使って光の演出を作る。",
    tags: ["グロー", "発光"],
    purposes: ["発光強化"],
    steps: "Wonder Glow FXを適用して発光量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Focus Glow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "焦点部分にグローを加える。",
    tags: ["フォーカス", "グロー"],
    purposes: ["焦点発光"],
    steps: "Focus Glow FXを適用して焦点と強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Volumetric Ray FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "ボリューム感のある光線を作る。",
    tags: ["光線", "ボリューム"],
    purposes: ["光線演出"],
    steps: "Volumetric Ray FXを適用して方向と強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Lens Flare FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "レンズフレアを加える。",
    tags: ["レンズフレア", "光"],
    purposes: ["レンズフレア"],
    steps: "Lens Flare FXを適用して光源位置と強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Corner Pin FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "四隅を個別に制御して映像を変形する。",
    tags: ["変形", "四隅", "パース"],
    purposes: ["パース変形"],
    steps: "Corner Pin FXを適用して四隅を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Lens Distortion FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "レンズのような歪みを作る。",
    tags: ["歪み", "レンズ"],
    purposes: ["魚眼風"],
    steps: "Lens Distortion FXを適用して歪み量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Magnify FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像の一部分を拡大する。",
    tags: ["拡大", "虫眼鏡"],
    purposes: ["部分拡大"],
    steps: "Magnify FXを適用して拡大範囲を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Mirror FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像を鏡像化する。",
    tags: ["反転", "ミラー"],
    purposes: ["鏡像"],
    steps: "Mirror FXを適用して反転軸を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Turbulent Displace FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像を不規則に歪ませる。",
    tags: ["歪み", "波"],
    purposes: ["画面歪み"],
    steps: "Turbulent Displace FXを適用して歪みを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Twirl FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像を渦巻き状に変形する。",
    tags: ["渦", "回転", "歪み"],
    purposes: ["渦巻き変形"],
    steps: "Twirl FXを適用して中心と強度を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Mosaic FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像をピクセル状に加工する。",
    tags: ["モザイク", "ピクセル"],
    purposes: ["モザイク処理"],
    steps: "Mosaic FXを適用してブロックサイズを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Vignette FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像周辺にビネットを加える。",
    tags: ["ビネット", "周辺減光"],
    purposes: ["中央強調"],
    steps: "Vignette FXを適用して周辺減光を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Stroke FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "輪郭線やストロークを追加する。",
    tags: ["線", "輪郭"],
    purposes: ["線描画"],
    steps: "Stroke FXを適用して線の幅と色を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Long Shadow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "長く伸びる影を作る。",
    tags: ["長い影", "影"],
    purposes: ["長い影"],
    steps: "Long Shadow FXを適用して影の長さを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Rounded Crop FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "角丸のクロップを作る。",
    tags: ["角丸", "クロップ"],
    purposes: ["角丸切り抜き"],
    steps: "Rounded Crop FXを適用して角丸と範囲を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Blur FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "スタイライズされたぼかしを加える。",
    tags: ["ぼかし", "ブラー"],
    purposes: ["ぼかし"],
    steps: "Blur FXを適用してぼかしを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Alpha FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "アルファ・透明度を利用した合成処理を行う。",
    tags: ["アルファ", "透明"],
    purposes: ["透明度処理"],
    steps: "Alpha FXを適用してアルファ設定を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "3D Rotation FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "3D空間で映像を回転させる。",
    tags: ["3D", "回転"],
    purposes: ["3D回転"],
    steps: "3D Rotation FXを適用して回転を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Spin FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "要素を連続的に回転させる。",
    tags: ["回転", "スピン"],
    purposes: ["連続回転"],
    steps: "Spin FXを適用して回転速度を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Spacer FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "要素間の間隔を作る。",
    tags: ["間隔", "レイアウト"],
    purposes: ["スペース調整"],
    steps: "Spacer FXを適用して間隔を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Reduce FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "要素を縮小するアニメーションを作る。",
    tags: ["縮小", "モーション"],
    purposes: ["縮小アニメーション"],
    steps: "Reduce FXを適用して縮小量を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Move FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "映像要素を滑らかに移動させる。",
    tags: ["移動", "モーション"],
    purposes: ["移動アニメーション"],
    steps: "Move FXを適用して移動方向と距離を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Glow FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "発光するようにアニメーションさせる。",
    tags: ["グロー", "発光"],
    purposes: ["発光アニメーション"],
    steps: "Glow FXを適用して発光設定を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Wiggle FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "ランダムな揺れを加える。",
    tags: ["揺れ", "ランダム"],
    purposes: ["揺れアニメーション"],
    steps: "Wiggle FXを適用して揺れ量を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Camera Shake FX",
    kind: "effect",
    type: "モダンエフェクト",
    description: "カメラが揺れるような動きを作る。",
    tags: ["カメラ", "揺れ"],
    purposes: ["カメラシェイク"],
    steps: "Camera Shake FXを適用して揺れ量を設定。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Gradient",
    kind: "effect",
    type: "モダンエフェクト",
    description: "グラデーションを生成する。",
    tags: ["グラデーション", "カラー"],
    purposes: ["グラデーション生成"],
    steps: "Gradientを適用して色と方向を調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },

  {
    name: "Channel Blur",
    kind: "effect",
    type: "モダンエフェクト",
    description: "カラーチャンネル単位でぼかしを加える。",
    tags: ["チャンネル", "ぼかし", "RGB"],
    purposes: ["RGB別ぼかし"],
    steps: "Channel Blurを適用して各チャンネルのぼかしを調整。",
    shortcut: "",
    info: "Adobeのモダンエフェクト。",
    status: "current"
  },


  /* =========================
     ビデオトランジション
     ========================= */

  {
    name: "Dissolve",
    kind: "transition",
    type: "ディゾルブ",
    description: "2つの映像を滑らかに溶かして切り替える。",
    tags: ["ディゾルブ", "切り替え"],
    purposes: ["場面転換"],
    steps: "クリップ間にDissolveを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Cross Dissolve",
    kind: "transition",
    type: "ディゾルブ",
    description: "前の映像から次の映像へ徐々に切り替える定番トランジション。",
    tags: ["ディゾルブ", "フェード"],
    purposes: ["自然な場面転換"],
    steps: "クリップ間にCross Dissolveを適用。",
    shortcut: "Ctrl + D",
    info: "",
    status: "current"
  },

  {
    name: "Dip to Black",
    kind: "transition",
    type: "ディゾルブ",
    description: "一度黒くなってから次の映像へ切り替える。",
    tags: ["暗転", "フェード"],
    purposes: ["場面転換", "動画終了"],
    steps: "クリップ間にDip to Blackを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Dip to White",
    kind: "transition",
    type: "ディゾルブ",
    description: "一度白くなってから次の映像へ切り替える。",
    tags: ["白", "フラッシュ"],
    purposes: ["場面転換"],
    steps: "クリップ間にDip to Whiteを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Film Dissolve",
    kind: "transition",
    type: "ディゾルブ",
    description: "フィルムのような柔らかなディゾルブ。",
    tags: ["フィルム", "フェード"],
    purposes: ["映画風場面転換"],
    steps: "クリップ間にFilm Dissolveを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Morph Cut",
    kind: "transition",
    type: "ディゾルブ",
    description: "人物のジャンプカットを解析して滑らかにつなぐ。",
    tags: ["モーフ", "ジャンプカット", "インタビュー"],
    purposes: ["インタビュー編集"],
    steps: "ジャンプカット部分にMorph Cutを適用して解析。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "型抜き",
    kind: "transition",
    type: "ディゾルブ",
    description: "形状を利用して映像を切り替える。",
    tags: ["型抜き", "切り替え"],
    purposes: ["特殊な場面転換"],
    steps: "クリップ間に型抜きトランジションを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Chroma Leaks",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "360度映像をクロマリークで切り替える。",
    tags: ["VR", "クロマリーク"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Chroma Leaksを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Gradient Wipe",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "グラデーションを使って360度映像を切り替える。",
    tags: ["VR", "グラデーション", "ワイプ"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Gradient Wipeを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Iris Wipe",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "アイリス状に360度映像を切り替える。",
    tags: ["VR", "アイリス", "ワイプ"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Iris Wipeを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Light Leaks",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "光漏れを利用して360度映像を切り替える。",
    tags: ["VR", "光漏れ"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Light Leaksを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Light Rays",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "光線を利用して360度映像を切り替える。",
    tags: ["VR", "光線"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Light Raysを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Mobius Zoom",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "メビウス状のズームで360度映像を切り替える。",
    tags: ["VR", "ズーム"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Mobius Zoomを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Random Blocks",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "ランダムなブロックで360度映像を切り替える。",
    tags: ["VR", "ブロック"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Random Blocksを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "VR Spherical Blur",
    kind: "transition",
    type: "イマーシブビデオ",
    description: "球面状のぼかしを使って360度映像を切り替える。",
    tags: ["VR", "球面", "ぼかし"],
    purposes: ["VR場面転換"],
    steps: "クリップ間にVR Spherical Blurを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Iris Box",
    kind: "transition",
    type: "アイリス",
    description: "四角形が開閉するように映像を切り替える。",
    tags: ["アイリス", "四角"],
    purposes: ["場面転換"],
    steps: "Iris Boxをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Iris Cross",
    kind: "transition",
    type: "アイリス",
    description: "十字形に開閉して映像を切り替える。",
    tags: ["アイリス", "クロス"],
    purposes: ["場面転換"],
    steps: "Iris Crossをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Iris Diamond",
    kind: "transition",
    type: "アイリス",
    description: "ひし形に開閉して映像を切り替える。",
    tags: ["アイリス", "ひし形"],
    purposes: ["場面転換"],
    steps: "Iris Diamondをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Iris Round",
    kind: "transition",
    type: "アイリス",
    description: "円形に開閉して映像を切り替える。",
    tags: ["アイリス", "円"],
    purposes: ["場面転換"],
    steps: "Iris Roundをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Page Peel",
    kind: "transition",
    type: "ページピール",
    description: "ページをめくるように映像を切り替える。",
    tags: ["ページ", "めくる"],
    purposes: ["場面転換"],
    steps: "Page Peelをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Page Turn",
    kind: "transition",
    type: "ページピール",
    description: "ページをめくるような動きで切り替える。",
    tags: ["ページ", "めくる"],
    purposes: ["場面転換"],
    steps: "Page Turnをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Band Slide",
    kind: "transition",
    type: "スライド",
    description: "帯状に分割した映像をスライドさせる。",
    tags: ["スライド", "帯"],
    purposes: ["場面転換"],
    steps: "Band Slideをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Center Split",
    kind: "transition",
    type: "スライド",
    description: "画面中央から分割して切り替える。",
    tags: ["スライド", "分割"],
    purposes: ["場面転換"],
    steps: "Center Splitをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Push",
    kind: "transition",
    type: "スライド",
    description: "次の映像が前の映像を押し出すように切り替える。",
    tags: ["押し出し", "スライド"],
    purposes: ["場面転換"],
    steps: "Pushをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Slide",
    kind: "transition",
    type: "スライド",
    description: "映像をスライドさせて切り替える。",
    tags: ["スライド", "移動"],
    purposes: ["場面転換"],
    steps: "Slideをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Split",
    kind: "transition",
    type: "スライド",
    description: "画面を分割して切り替える。",
    tags: ["分割", "スライド"],
    purposes: ["場面転換"],
    steps: "Splitをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Whip",
    kind: "transition",
    type: "スライド",
    description: "高速で画面を振るように切り替える。",
    tags: ["高速", "スライド"],
    purposes: ["高速場面転換"],
    steps: "Whipをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Band Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "帯状の領域で画面を拭き取るように切り替える。",
    tags: ["ワイプ", "帯"],
    purposes: ["場面転換"],
    steps: "Band Wipeをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Barn Doors",
    kind: "transition",
    type: "ワイプ",
    description: "扉が開くように映像を切り替える。",
    tags: ["ワイプ", "扉"],
    purposes: ["場面転換"],
    steps: "Barn Doorsをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Checker Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "チェッカー模様で映像を切り替える。",
    tags: ["ワイプ", "チェック"],
    purposes: ["場面転換"],
    steps: "Checker Wipeをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Checkerboard",
    kind: "transition",
    type: "ワイプ",
    description: "チェッカーボード状に映像を切り替える。",
    tags: ["ワイプ", "ブロック"],
    purposes: ["場面転換"],
    steps: "Checkerboardをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Clock Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "時計の針のように回転して切り替える。",
    tags: ["ワイプ", "時計", "円形"],
    purposes: ["場面転換"],
    steps: "Clock Wipeをクリップ間に適用。",
    shortcut: "",
    info: "現行資料・モダン版でも関連名称があります。",
    status: "current"
  },

  {
    name: "Inset",
    kind: "transition",
    type: "ワイプ",
    description: "画面内側から映像を切り替える。",
    tags: ["ワイプ", "インセット"],
    purposes: ["場面転換"],
    steps: "Insetをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Paint Splatter",
    kind: "transition",
    type: "ワイプ",
    description: "ペイントが飛び散るような切り替えを作る。",
    tags: ["ペイント", "スプラッター"],
    purposes: ["特殊な場面転換"],
    steps: "Paint Splatterをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Multi Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "複数方向のワイプを組み合わせて切り替える。",
    tags: ["ワイプ", "マルチ"],
    purposes: ["場面転換"],
    steps: "Multi Wipeをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Radial Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "放射状に映像を切り替える。",
    tags: ["ワイプ", "放射状"],
    purposes: ["場面転換"],
    steps: "Radial Wipeをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Random Blocks",
    kind: "transition",
    type: "ワイプ",
    description: "ランダムなブロックで映像を切り替える。",
    tags: ["ワイプ", "ランダム", "ブロック"],
    purposes: ["場面転換"],
    steps: "Random Blocksをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Random Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "ランダムな位置や方向からワイプする。",
    tags: ["ワイプ", "ランダム"],
    purposes: ["場面転換"],
    steps: "Random Wipeをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Spiral Boxes",
    kind: "transition",
    type: "ワイプ",
    description: "らせん状のボックスで映像を切り替える。",
    tags: ["ワイプ", "らせん"],
    purposes: ["場面転換"],
    steps: "Spiral Boxesをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Venetian Blinds",
    kind: "transition",
    type: "ワイプ",
    description: "ブラインドのような帯で映像を切り替える。",
    tags: ["ワイプ", "ブラインド"],
    purposes: ["場面転換"],
    steps: "Venetian Blindsをクリップ間に適用。",
    shortcut: "",
    info: "レガシー項目。",
    status: "legacy"
  },

  {
    name: "Wedge Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "くさび形で映像を切り替える。",
    tags: ["ワイプ", "くさび"],
    purposes: ["場面転換"],
    steps: "Wedge Wipeをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Wipe",
    kind: "transition",
    type: "ワイプ",
    description: "指定方向に画面を拭き取るように切り替える。",
    tags: ["ワイプ", "方向"],
    purposes: ["場面転換"],
    steps: "Wipeをクリップ間に適用して方向を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Zig-Zag Blocks",
    kind: "transition",
    type: "ワイプ",
    description: "ジグザグ状のブロックで映像を切り替える。",
    tags: ["ワイプ", "ジグザグ"],
    purposes: ["場面転換"],
    steps: "Zig-Zag Blocksをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Cross Zoom",
    kind: "transition",
    type: "ズーム",
    description: "ズームを利用して映像を切り替える。",
    tags: ["ズーム", "切り替え"],
    purposes: ["場面転換"],
    steps: "Cross Zoomをクリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     モダントランジション
     ========================= */

  {
    name: "Mosaic Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "モザイク状のインパクト切り替え。",
    tags: ["インパクト", "モザイク"],
    purposes: ["モザイク切り替え"],
    steps: "Mosaic Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Star Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "星形ワイプによるインパクト切り替え。",
    tags: ["インパクト", "星", "ワイプ"],
    purposes: ["星型切り替え"],
    steps: "Star Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Chaos Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "不規則な動きで切り替えるインパクトトランジション。",
    tags: ["インパクト", "カオス"],
    purposes: ["特殊切り替え"],
    steps: "Chaos Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Burn Alpha Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "燃焼するようなアルファ切り替え。",
    tags: ["インパクト", "燃焼", "アルファ"],
    purposes: ["燃える切り替え"],
    steps: "Burn Alpha Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Flash Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "強いフラッシュで映像を切り替える。",
    tags: ["インパクト", "フラッシュ", "光"],
    purposes: ["フラッシュ切り替え"],
    steps: "Flash Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Blur to Color Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ぼかしからカラーへ変化して切り替える。",
    tags: ["インパクト", "ぼかし", "カラー"],
    purposes: ["ぼかしからカラー"],
    steps: "Blur to Color Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Roll Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "回転するように切り替える。",
    tags: ["インパクト", "ロール", "回転"],
    purposes: ["回転切り替え"],
    steps: "Roll Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Stretch Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "伸び縮みするように切り替える。",
    tags: ["インパクト", "ストレッチ", "変形"],
    purposes: ["伸縮切り替え"],
    steps: "Stretch Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Dissolve Impacts",
    kind: "transition",
    type: "モダントランジション",
    description: "インパクトのあるディゾルブ。",
    tags: ["インパクト", "ディゾルブ"],
    purposes: ["ディゾルブ演出"],
    steps: "Dissolve Impactsをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Push Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "強い押し出し動作で切り替える。",
    tags: ["インパクト", "プッシュ"],
    purposes: ["押し出し切り替え"],
    steps: "Push Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Burn Chroma Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "クロマと燃焼を使った切り替え。",
    tags: ["インパクト", "クロマ", "燃焼"],
    purposes: ["クロマ燃焼切り替え"],
    steps: "Burn Chroma Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Blur Dissolve Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ぼかしを伴うディゾルブ切り替え。",
    tags: ["インパクト", "ぼかし", "ディゾルブ"],
    purposes: ["ぼかしディゾルブ"],
    steps: "Blur Dissolve Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Neon Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ネオン光で画面をワイプする。",
    tags: ["インパクト", "ネオン", "ワイプ"],
    purposes: ["ネオン切り替え"],
    steps: "Neon Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Luminance Fade Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "明るさ情報を利用してフェード切り替えを作る。",
    tags: ["インパクト", "ルミナンス", "フェード"],
    purposes: ["明るさフェード"],
    steps: "Luminance Fade Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Clock Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "時計のように回転するインパクトワイプ。",
    tags: ["インパクト", "時計", "ワイプ"],
    purposes: ["時計ワイプ"],
    steps: "Clock Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Linear Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "線形ワイプによるインパクト切り替え。",
    tags: ["インパクト", "ワイプ", "線形"],
    purposes: ["線形ワイプ"],
    steps: "Linear Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Frame Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "フレームを利用して切り替える。",
    tags: ["インパクト", "フレーム"],
    purposes: ["フレーム切り替え"],
    steps: "Frame Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Film Roll Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "フィルムが回転するように切り替える。",
    tags: ["インパクト", "フィルム", "ロール"],
    purposes: ["フィルム回転"],
    steps: "Film Roll Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Page Peel Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ページをめくるようなインパクト切り替え。",
    tags: ["インパクト", "ページピール"],
    purposes: ["ページめくり"],
    steps: "Page Peel Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Louver Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ルーバー状に画面を切り替える。",
    tags: ["インパクト", "ルーバー"],
    purposes: ["ルーバー切り替え"],
    steps: "Louver Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "3D Spin Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "3D回転による切り替え。",
    tags: ["インパクト", "3D", "スピン"],
    purposes: ["3D回転切り替え"],
    steps: "3D Spin Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "3D Roll Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "3Dロールによる切り替え。",
    tags: ["インパクト", "3D", "ロール"],
    purposes: ["3Dロール切り替え"],
    steps: "3D Roll Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Panel Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "パネル状に画面を切り替える。",
    tags: ["インパクト", "パネル", "ワイプ"],
    purposes: ["パネル切り替え"],
    steps: "Panel Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Split Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "分割を利用して切り替える。",
    tags: ["インパクト", "分割"],
    purposes: ["分割切り替え"],
    steps: "Split Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Plateau Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "特徴的なワイプで切り替える。",
    tags: ["インパクト", "プラトー", "ワイプ"],
    purposes: ["特殊ワイプ"],
    steps: "Plateau Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Slice Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "映像をスライスするように切り替える。",
    tags: ["インパクト", "スライス"],
    purposes: ["スライス切り替え"],
    steps: "Slice Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Waveform Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "波形のような動きで切り替える。",
    tags: ["インパクト", "波形"],
    purposes: ["波形切り替え"],
    steps: "Waveform Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Stretch Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "伸縮するワイプで切り替える。",
    tags: ["インパクト", "ストレッチ", "ワイプ"],
    purposes: ["伸縮ワイプ"],
    steps: "Stretch Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Mirror Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ミラー効果を使って切り替える。",
    tags: ["インパクト", "ミラー"],
    purposes: ["ミラー切り替え"],
    steps: "Mirror Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "3D Spin Back Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "3Dスピンして戻るような切り替え。",
    tags: ["インパクト", "3D", "スピンバック"],
    purposes: ["3D回転戻し"],
    steps: "3D Spin Back Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Slide Impacts",
    kind: "transition",
    type: "モダントランジション",
    description: "スライド動作によるインパクト切り替え。",
    tags: ["インパクト", "スライド"],
    purposes: ["スライド切り替え"],
    steps: "Slide Impactsをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Pull Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "映像を引き込むように切り替える。",
    tags: ["インパクト", "プル", "モーション"],
    purposes: ["引き込み切り替え"],
    steps: "Pull Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Block Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ブロック状の動きで切り替える。",
    tags: ["インパクト", "ブロック", "モーション"],
    purposes: ["ブロック切り替え"],
    steps: "Block Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Travel Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "移動するように切り替える。",
    tags: ["インパクト", "トラベル", "モーション"],
    purposes: ["移動切り替え"],
    steps: "Travel Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Spin Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "回転しながら切り替える。",
    tags: ["インパクト", "スピン", "モーション"],
    purposes: ["スピン切り替え"],
    steps: "Spin Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Flip Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "反転するように切り替える。",
    tags: ["インパクト", "フリップ"],
    purposes: ["反転切り替え"],
    steps: "Flip Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Spring Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ばねのような動きで切り替える。",
    tags: ["インパクト", "スプリング"],
    purposes: ["バネ感切り替え"],
    steps: "Spring Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Pop Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ポップするように切り替える。",
    tags: ["インパクト", "ポップ"],
    purposes: ["ポップ切り替え"],
    steps: "Pop Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Fold Motion Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "折りたたむように切り替える。",
    tags: ["インパクト", "折りたたみ"],
    purposes: ["折りたたみ切り替え"],
    steps: "Fold Motion Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Typewriter Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "タイプライターのように文字を表示して切り替える。",
    tags: ["インパクト", "タイプライター", "文字"],
    purposes: ["文字切り替え"],
    steps: "Typewriter Impactをテキストに適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Chroma Leak Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "クロマリークで映像を切り替える。",
    tags: ["インパクト", "クロマリーク"],
    purposes: ["クロマリーク切り替え"],
    steps: "Chroma Leak Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Light Sweep Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "光が横切るように切り替える。",
    tags: ["インパクト", "光", "スイープ"],
    purposes: ["光の掃引"],
    steps: "Light Sweep Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Solarization Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ソラリゼーション風に切り替える。",
    tags: ["インパクト", "カラー"],
    purposes: ["特殊カラー切り替え"],
    steps: "Solarization Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Ray Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "光線のような動きで切り替える。",
    tags: ["インパクト", "光線"],
    purposes: ["光線切り替え"],
    steps: "Ray Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Radial Blur Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "放射状ブラーで切り替える。",
    tags: ["インパクト", "放射状", "ぼかし"],
    purposes: ["放射状ブラー切り替え"],
    steps: "Radial Blur Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Directional Blur Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "方向性ブラーで切り替える。",
    tags: ["インパクト", "方向", "ぼかし"],
    purposes: ["方向ブラー切り替え"],
    steps: "Directional Blur Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Glow Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "グローと発光を使って切り替える。",
    tags: ["インパクト", "グロー"],
    purposes: ["発光切り替え"],
    steps: "Glow Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Flare Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "フレア光で切り替える。",
    tags: ["インパクト", "フレア"],
    purposes: ["フレア切り替え"],
    steps: "Flare Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Zoom Blur Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ズームブラーによる切り替え。",
    tags: ["インパクト", "ズーム", "ぼかし"],
    purposes: ["ズーム切り替え"],
    steps: "Zoom Blur Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Stripe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "ストライプ状に切り替える。",
    tags: ["インパクト", "ストライプ"],
    purposes: ["ストライプ切り替え"],
    steps: "Stripe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Soft Wipe Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "柔らかいワイプで切り替える。",
    tags: ["インパクト", "ソフト", "ワイプ"],
    purposes: ["柔らかいワイプ"],
    steps: "Soft Wipe Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Light Leak Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "光漏れを利用して切り替える。",
    tags: ["インパクト", "光漏れ"],
    purposes: ["光漏れ切り替え"],
    steps: "Light Leak Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Phosphor Impact",
    kind: "transition",
    type: "モダントランジション",
    description: "蛍光発光のように切り替える。",
    tags: ["インパクト", "蛍光", "発光"],
    purposes: ["蛍光切り替え"],
    steps: "Phosphor Impactをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Motion Camera",
    kind: "transition",
    type: "モダントランジション",
    description: "カメラモーションを利用した切り替え。",
    tags: ["カメラ", "モーション"],
    purposes: ["カメラ切り替え"],
    steps: "Motion Cameraをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Motion Tween",
    kind: "transition",
    type: "モダントランジション",
    description: "モーションを補間してつなぐ。",
    tags: ["モーション", "トゥイーン"],
    purposes: ["動きのつなぎ"],
    steps: "Motion Tweenをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Shape Flow",
    kind: "transition",
    type: "モダントランジション",
    description: "シェイプが流れるように切り替える。",
    tags: ["シェイプ", "フロー"],
    purposes: ["シェイプ切り替え"],
    steps: "Shape Flowをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Shape Dissolve",
    kind: "transition",
    type: "モダントランジション",
    description: "シェイプを使ってディゾルブする。",
    tags: ["シェイプ", "ディゾルブ"],
    purposes: ["シェイプディゾルブ"],
    steps: "Shape Dissolveをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Text Animator",
    kind: "transition",
    type: "モダントランジション",
    description: "文字要素をアニメーションさせる。",
    tags: ["文字", "アニメーション"],
    purposes: ["文字アニメーション"],
    steps: "Text Animatorをテキストに適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Typewriter",
    kind: "transition",
    type: "モダントランジション",
    description: "文字をタイプライターのように表示する。",
    tags: ["文字", "タイプライター"],
    purposes: ["タイプライター表示"],
    steps: "Typewriterをテキストに適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "3D Spin",
    kind: "transition",
    type: "モダントランジション",
    description: "3D回転で切り替える。",
    tags: ["3D", "スピン"],
    purposes: ["3D回転"],
    steps: "3D Spinをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Frame",
    kind: "transition",
    type: "モダントランジション",
    description: "フレームを使って切り替える。",
    tags: ["フレーム"],
    purposes: ["フレーム切り替え"],
    steps: "Frameをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Louver",
    kind: "transition",
    type: "モダントランジション",
    description: "ルーバー状に切り替える。",
    tags: ["ルーバー"],
    purposes: ["ルーバー切り替え"],
    steps: "Louverをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Mirror Effect",
    kind: "transition",
    type: "モダントランジション",
    description: "ミラー効果で映像を切り替える。",
    tags: ["ミラー", "反転"],
    purposes: ["ミラー切り替え"],
    steps: "Mirror Effectをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Slice",
    kind: "transition",
    type: "モダントランジション",
    description: "映像をスライスするように切り替える。",
    tags: ["スライス"],
    purposes: ["スライス切り替え"],
    steps: "Sliceをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Wave",
    kind: "transition",
    type: "モダントランジション",
    description: "波状の動きで切り替える。",
    tags: ["波", "変形"],
    purposes: ["波切り替え"],
    steps: "Waveをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション。",
    status: "current"
  },

  {
    name: "Clock Wipe Modern",
    kind: "transition",
    type: "モダントランジション",
    description: "時計のように回転して切り替えるモダン版。",
    tags: ["時計", "ワイプ"],
    purposes: ["時計切り替え"],
    steps: "Clock Wipeをクリップ間に適用。",
    shortcut: "",
    info: "Adobeのモダントランジション系。",
    status: "current"
  },

  {
    name: "Linear Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "線形ワイプで映像を切り替える。",
    tags: ["線形", "ワイプ"],
    purposes: ["線形切り替え"],
    steps: "Linear Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Neon Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "ネオン風のワイプで切り替える。",
    tags: ["ネオン", "ワイプ"],
    purposes: ["ネオン切り替え"],
    steps: "Neon Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Panel Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "パネル状に画面を切り替える。",
    tags: ["パネル", "ワイプ"],
    purposes: ["パネル切り替え"],
    steps: "Panel Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Plateau Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "特徴的な形状でワイプする。",
    tags: ["プラトー", "ワイプ"],
    purposes: ["特殊ワイプ"],
    steps: "Plateau Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Soft Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "柔らかい境界で映像を切り替える。",
    tags: ["ソフト", "ワイプ"],
    purposes: ["柔らかい切り替え"],
    steps: "Soft Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Star Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "星形のワイプで切り替える。",
    tags: ["星", "ワイプ"],
    purposes: ["星型切り替え"],
    steps: "Star Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },

  {
    name: "Stretch Wipe",
    kind: "transition",
    type: "モダントランジション",
    description: "伸縮するワイプで切り替える。",
    tags: ["ストレッチ", "ワイプ"],
    purposes: ["伸縮切り替え"],
    steps: "Stretch Wipeをクリップ間に適用。",
    shortcut: "",
    info: "モダンエフェクト資料に掲載。",
    status: "current"
  },


  /* =========================
     オーディオエフェクト
     ========================= */

  {
    name: "Amplify",
    kind: "audio",
    type: "振幅・圧縮",
    description: "音声のゲインを増減する。",
    tags: ["音", "音量", "ゲイン"],
    purposes: ["音量を上げる", "音量調整"],
    steps: "Amplifyを適用してゲインを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Channel Volume",
    kind: "audio",
    type: "振幅・圧縮",
    description: "各オーディオチャンネルの音量を個別に調整する。",
    tags: ["音", "音量", "チャンネル"],
    purposes: ["チャンネル別音量"],
    steps: "Channel Volumeを適用して各チャンネルのレベルを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Dynamics",
    kind: "audio",
    type: "振幅・圧縮",
    description: "音量差を整えて音声を聞きやすくする。",
    tags: ["音", "コンプレッサー", "音量"],
    purposes: ["音量安定"],
    steps: "Dynamicsを適用してCompressorやLimiterを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Dynamics Processing",
    kind: "audio",
    type: "振幅・圧縮",
    description: "入力に応じて出力音量を細かく制御する。",
    tags: ["音", "ダイナミクス"],
    purposes: ["音量処理"],
    steps: "Dynamics Processingを適用してカーブを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Hard Limiter",
    kind: "audio",
    type: "振幅・圧縮",
    description: "音量ピークを設定値以下に抑える。",
    tags: ["音", "リミッター", "ピーク"],
    purposes: ["音割れ防止", "ピーク制御"],
    steps: "Hard Limiterを適用してMaximum Amplitudeを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Multiband Compressor",
    kind: "audio",
    type: "振幅・圧縮",
    description: "複数の周波数帯域を分けて圧縮する。",
    tags: ["音", "コンプレッサー", "音圧"],
    purposes: ["音圧調整", "マスタリング"],
    steps: "Multiband Compressorを適用して各帯域を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Single-Band Compressor",
    kind: "audio",
    type: "振幅・圧縮",
    description: "音量の大小の差を圧縮する。",
    tags: ["音", "コンプレッサー"],
    purposes: ["音量差調整"],
    steps: "Single-Band Compressorを適用してThresholdやRatioを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Tube-modeled Compressor",
    kind: "audio",
    type: "振幅・圧縮",
    description: "チューブコンプレッサーのような特性で音を圧縮する。",
    tags: ["音", "コンプレッサー", "チューブ"],
    purposes: ["音圧調整"],
    steps: "Tube-modeled Compressorを適用して設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Analog Delay",
    kind: "audio",
    type: "ディレイ・エコー",
    description: "アナログ風のディレイを作る。",
    tags: ["音", "ディレイ", "エコー"],
    purposes: ["エコー", "空間演出"],
    steps: "Analog Delayを適用してDelayやFeedbackを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Delay",
    kind: "audio",
    type: "ディレイ・エコー",
    description: "音声を遅延させてエコーを作る。",
    tags: ["音", "ディレイ", "エコー"],
    purposes: ["エコー"],
    steps: "Delayを適用してDelay Timeなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Multitap Delay",
    kind: "audio",
    type: "ディレイ・エコー",
    description: "複数の遅延音を加えて複雑なエコーを作る。",
    tags: ["音", "ディレイ", "エコー"],
    purposes: ["複数エコー"],
    steps: "Multitap Delayを適用して各タップを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Bandpass",
    kind: "audio",
    type: "フィルター・EQ",
    description: "指定した周波数帯だけを通過させる。",
    tags: ["音", "EQ", "フィルター"],
    purposes: ["特定帯域だけ通す", "電話音風"],
    steps: "Bandpassを適用して中心周波数と帯域幅を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Bass",
    kind: "audio",
    type: "フィルター・EQ",
    description: "低音域を増減する。",
    tags: ["音", "低音", "EQ"],
    purposes: ["低音調整"],
    steps: "Bassを適用してBoostを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "FFT Filter",
    kind: "audio",
    type: "フィルター・EQ",
    description: "周波数カーブを使って音を細かく調整する。",
    tags: ["音", "EQ", "フィルター"],
    purposes: ["周波数補正", "ノイズ除去"],
    steps: "FFT Filterを適用して周波数カーブを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Graphic Equalizer",
    kind: "audio",
    type: "フィルター・EQ",
    description: "複数周波数帯をスライダーで調整するEQ。",
    tags: ["音", "EQ", "周波数"],
    purposes: ["音質調整"],
    steps: "Graphic Equalizerを適用して各帯域を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Highpass",
    kind: "audio",
    type: "フィルター・EQ",
    description: "低い周波数をカットする。",
    tags: ["音", "EQ", "低音カット"],
    purposes: ["低域カット"],
    steps: "Highpassを適用してカット周波数を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Lowpass",
    kind: "audio",
    type: "フィルター・EQ",
    description: "高い周波数をカットする。",
    tags: ["音", "EQ", "高音カット"],
    purposes: ["高域カット", "電話音風"],
    steps: "Lowpassを適用してカット周波数を設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Notch Filter",
    kind: "audio",
    type: "フィルター・EQ",
    description: "特定の周波数だけを狙って除去する。",
    tags: ["音", "EQ", "ノッチ"],
    purposes: ["特定周波数除去"],
    steps: "Notch Filterを適用して対象周波数を指定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Parametric Equalizer",
    kind: "audio",
    type: "フィルター・EQ",
    description: "周波数ごとの音量を細かく調整する。",
    tags: ["音", "EQ", "周波数"],
    purposes: ["声を聞きやすく", "低音高音調整"],
    steps: "Parametric Equalizerを適用して周波数帯域を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Scientific Filter",
    kind: "audio",
    type: "フィルター・EQ",
    description: "高度なフィルタリングを行う。",
    tags: ["音", "フィルター", "周波数"],
    purposes: ["高度な周波数処理"],
    steps: "Scientific Filterを適用してフィルター設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Treble",
    kind: "audio",
    type: "フィルター・EQ",
    description: "高音域を増減する。",
    tags: ["音", "高音", "EQ"],
    purposes: ["高音調整"],
    steps: "Trebleを適用してBoostを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Chorus",
    kind: "audio",
    type: "モジュレーション",
    description: "音を重ねて厚みと広がりを加える。",
    tags: ["音", "コーラス", "厚み"],
    purposes: ["音に厚みを出す"],
    steps: "Chorusを適用してSpeedやDepthなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Flanger",
    kind: "audio",
    type: "モジュレーション",
    description: "音に独特のうねりを加える。",
    tags: ["音", "フランジャー", "変調"],
    purposes: ["うねりを作る"],
    steps: "Flangerを適用してDelayやFeedbackを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Phaser",
    kind: "audio",
    type: "モジュレーション",
    description: "位相変化によるうねりを作る。",
    tags: ["音", "フェーザー", "位相"],
    purposes: ["特殊音響効果"],
    steps: "Phaserを適用してStagesやDepthを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Stereo Expander",
    kind: "audio",
    type: "ステレオイメージ",
    description: "ステレオ音場の広がりを調整する。",
    tags: ["音", "ステレオ", "広がり"],
    purposes: ["音場を広げる"],
    steps: "Stereo Expanderを適用してステレオ幅を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Automatic Click Remover",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "クリックノイズやポップノイズを軽減する。",
    tags: ["音", "クリック", "ノイズ除去"],
    purposes: ["クリックノイズ除去"],
    steps: "Automatic Click Removerを適用してThresholdなどを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "DeClicker",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "クリック音を除去する。",
    tags: ["音", "クリック", "修復"],
    purposes: ["クリックノイズ除去"],
    steps: "DeClickerを適用して設定を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "DeClipper",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "クリッピングによる音割れを補正する。",
    tags: ["音", "クリッピング", "修復"],
    purposes: ["音割れ補正"],
    steps: "DeClipperを適用して修復量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "DeEsser",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "サ行などの歯擦音を抑える。",
    tags: ["音", "声", "サ行", "高音"],
    purposes: ["歯擦音除去"],
    steps: "DeEsserを適用して対象周波数と処理量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "DeHummer",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "電源などによるハムノイズを除去する。",
    tags: ["音", "ハムノイズ"],
    purposes: ["ハムノイズ除去"],
    steps: "DeHummerを適用してFrequencyやGainを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "DeNoise",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "環境ノイズやホワイトノイズを軽減する。",
    tags: ["音", "ノイズ除去"],
    purposes: ["環境ノイズ軽減"],
    steps: "DeNoiseを適用してReduction量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Noise Reduction",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "不要なノイズを軽減する。",
    tags: ["音", "ノイズ除去"],
    purposes: ["ノイズ低減"],
    steps: "Noise Reductionを適用してReduction量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Reverb Removal",
    kind: "audio",
    type: "ノイズ除去・修復",
    description: "録音された音声の余計な残響を軽減する。",
    tags: ["音", "残響除去"],
    purposes: ["部屋鳴り低減"],
    steps: "Reverb Removalを適用して処理量を調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Convolution Reverb",
    kind: "audio",
    type: "リバーブ",
    description: "インパルス応答を使って空間の残響を再現する。",
    tags: ["音", "リバーブ", "空間"],
    purposes: ["リアルな空間演出"],
    steps: "Convolution Reverbを適用してImpulseなどを設定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Studio Reverb",
    kind: "audio",
    type: "リバーブ",
    description: "スタジオやホールのような残響を加える。",
    tags: ["音", "リバーブ", "空間"],
    purposes: ["空間感を出す"],
    steps: "Studio Reverbを適用してRoom SizeやDecayを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Surround Reverb",
    kind: "audio",
    type: "リバーブ",
    description: "広がりのある残響を加える。",
    tags: ["音", "リバーブ", "サラウンド"],
    purposes: ["広がりのある残響"],
    steps: "Surround Reverbを適用して各チャンネルを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Distortion",
    kind: "audio",
    type: "特殊",
    description: "音声を歪ませて特殊な音色を作る。",
    tags: ["音", "歪み", "サチュレーション"],
    purposes: ["音を歪ませる"],
    steps: "Distortionを適用して歪みを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Guitar Suite",
    kind: "audio",
    type: "特殊",
    description: "ギターサウンドを加工する。",
    tags: ["音", "ギター", "アンプ"],
    purposes: ["ギター加工"],
    steps: "Guitar Suiteを適用してアンプやキャビネットを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Invert",
    kind: "audio",
    type: "特殊",
    description: "オーディオ信号の極性を反転する。",
    tags: ["音", "位相", "反転"],
    purposes: ["位相反転"],
    steps: "Invertをオーディオクリップに適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Loudness Radar",
    kind: "audio",
    type: "特殊",
    description: "ラウドネスを視覚的に確認する。",
    tags: ["音量", "ラウドネス", "メーター"],
    purposes: ["ラウドネス確認"],
    steps: "Loudness Radarを適用して再生し測定。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Mastering",
    kind: "audio",
    type: "特殊",
    description: "最終的な音のまとまりや音圧を調整する。",
    tags: ["音", "マスタリング", "音圧"],
    purposes: ["最終音量調整"],
    steps: "Masteringを適用して各パラメーターを調整。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Swap Channels",
    kind: "audio",
    type: "特殊",
    description: "左右のオーディオチャンネルを入れ替える。",
    tags: ["音", "ステレオ", "左右"],
    purposes: ["左右チャンネル入れ替え"],
    steps: "Swap Channelsを適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Vocal Enhancer",
    kind: "audio",
    type: "特殊",
    description: "音声やボーカルを聞きやすく整える。",
    tags: ["音", "声", "ボーカル"],
    purposes: ["ナレーション補正", "声の改善"],
    steps: "Vocal Enhancerを適用して音声タイプを選択。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     オーディオトランジション
     ========================= */

  {
    name: "Constant Gain",
    kind: "audio",
    type: "オーディオトランジション",
    description: "音量を一定の変化率でつないでフェードする。",
    tags: ["音", "ゲイン", "フェード"],
    purposes: ["音声をつなぐ"],
    steps: "Constant Gainを音声クリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Constant Power",
    kind: "audio",
    type: "オーディオトランジション",
    description: "2つの音声を滑らかにつなぐクロスフェード。",
    tags: ["音", "クロスフェード", "BGM"],
    purposes: ["BGMつなぎ", "音声クロスフェード"],
    steps: "Constant Powerを音声クリップ間に適用。",
    shortcut: "Ctrl + Shift + D",
    info: "",
    status: "current"
  },

  {
    name: "Exponential Fade",
    kind: "audio",
    type: "オーディオトランジション",
    description: "自然な音量カーブでフェードする。",
    tags: ["音", "フェード"],
    purposes: ["音声フェードアウト", "BGM終了"],
    steps: "Exponential Fadeを音声クリップ間に適用。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     ツール
     ========================= */

  {
    name: "Selection Tool",
    kind: "tool",
    type: "ツール",
    description: "クリップを選択・移動する基本ツール。",
    tags: ["ツール", "選択", "移動"],
    purposes: ["選択", "移動"],
    steps: "Selection Toolを選択してクリップを操作。",
    shortcut: "V",
    info: "",
    status: "current"
  },

  {
    name: "Track Select Forward Tool",
    kind: "tool",
    type: "ツール",
    description: "クリックした位置より後ろのクリップをまとめて選択する。",
    tags: ["ツール", "選択", "タイムライン"],
    purposes: ["後方選択", "まとめて移動"],
    steps: "Track Select Forward Toolを選択してクリップをクリック。",
    shortcut: "A",
    info: "",
    status: "current"
  },

  {
    name: "Track Select Backward Tool",
    kind: "tool",
    type: "ツール",
    description: "クリックした位置より前のクリップをまとめて選択する。",
    tags: ["ツール", "選択", "タイムライン"],
    purposes: ["前方選択", "まとめて移動"],
    steps: "Track Select Backward Toolを選択してクリップをクリック。",
    shortcut: "Shift + A",
    info: "",
    status: "current"
  },

  {
    name: "Ripple Edit Tool",
    kind: "tool",
    type: "ツール",
    description: "編集点を動かし、後ろのクリップも詰める。",
    tags: ["ツール", "リップル", "編集"],
    purposes: ["リップル編集", "尺調整"],
    steps: "Ripple Edit Toolで編集点をドラッグ。",
    shortcut: "B",
    info: "",
    status: "current"
  },

  {
    name: "Rolling Edit Tool",
    kind: "tool",
    type: "ツール",
    description: "2つのクリップの編集点を動かして尺配分を変更する。",
    tags: ["ツール", "編集点", "トリミング"],
    purposes: ["編集点調整"],
    steps: "Rolling Edit Toolで編集点をドラッグ。",
    shortcut: "N",
    info: "",
    status: "current"
  },

  {
    name: "Rate Stretch Tool",
    kind: "tool",
    type: "ツール",
    description: "クリップの長さに合わせて再生速度を変更する。",
    tags: ["ツール", "速度", "尺"],
    purposes: ["速度変更", "尺調整"],
    steps: "Rate Stretch Toolでクリップ端をドラッグ。",
    shortcut: "R",
    info: "",
    status: "current"
  },

  {
    name: "Razor Tool",
    kind: "tool",
    type: "ツール",
    description: "クリップを分割する基本ツール。",
    tags: ["ツール", "カット", "分割"],
    purposes: ["カット", "動画分割"],
    steps: "Razor Toolを選択してクリップ上をクリック。",
    shortcut: "C",
    info: "",
    status: "current"
  },

  {
    name: "Slip Tool",
    kind: "tool",
    type: "ツール",
    description: "クリップの中身だけを前後にずらす。",
    tags: ["ツール", "スリップ", "編集"],
    purposes: ["スリップ編集"],
    steps: "Slip Toolでクリップ内部のタイミングを調整。",
    shortcut: "Y",
    info: "",
    status: "current"
  },

  {
    name: "Slide Tool",
    kind: "tool",
    type: "ツール",
    description: "クリップを移動しながら前後の編集点を調整する。",
    tags: ["ツール", "スライド", "編集"],
    purposes: ["スライド編集"],
    steps: "Slide Toolでクリップをドラッグ。",
    shortcut: "U",
    info: "",
    status: "current"
  },

  {
    name: "Pen Tool",
    kind: "tool",
    type: "ツール",
    description: "キーフレームやゴムバンドを編集する。",
    tags: ["ツール", "キーフレーム", "ゴムバンド"],
    purposes: ["キーフレーム編集"],
    steps: "Pen Toolを選択してパラメーター上でキーフレームを操作。",
    shortcut: "P",
    info: "",
    status: "current"
  },

  {
    name: "Hand Tool",
    kind: "tool",
    type: "ツール",
    description: "タイムラインなどの表示位置をドラッグして移動する。",
    tags: ["ツール", "移動", "タイムライン"],
    purposes: ["タイムライン移動"],
    steps: "Hand Toolを選択してドラッグ。",
    shortcut: "H",
    info: "",
    status: "current"
  },

  {
    name: "Zoom Tool",
    kind: "tool",
    type: "ツール",
    description: "タイムラインを拡大・縮小表示する。",
    tags: ["ツール", "ズーム", "タイムライン"],
    purposes: ["タイムライン拡大"],
    steps: "Zoom Toolを選択してクリック。",
    shortcut: "Z",
    info: "",
    status: "current"
  },

  {
    name: "Text Tool",
    kind: "tool",
    type: "ツール",
    description: "プログラムモニター上にテキストを作成する。",
    tags: ["ツール", "文字", "テキスト"],
    purposes: ["テキスト作成"],
    steps: "Text Toolを選択してプログラムモニター上をクリック。",
    shortcut: "T",
    info: "",
    status: "current"
  },

  {
    name: "Rectangle Tool",
    kind: "tool",
    type: "ツール",
    description: "長方形のグラフィックを作成する。",
    tags: ["ツール", "図形", "長方形"],
    purposes: ["長方形作成"],
    steps: "Rectangle Toolを選択してドラッグ。",
    shortcut: "",
    info: "",
    status: "current"
  },

  {
    name: "Ellipse Tool",
    kind: "tool",
    type: "ツール",
    description: "楕円形のグラフィックを作成する。",
    tags: ["ツール", "図形", "楕円"],
    purposes: ["楕円作成"],
    steps: "Ellipse Toolを選択してドラッグ。",
    shortcut: "",
    info: "",
    status: "current"
  },


  /* =========================
     Windows デフォルトショートカット
     ========================= */

  {
    name: "新規プロジェクト",
    kind: "shortcut",
    type: "ショートカット",
    description: "新しいPremiereプロジェクトを作成する。",
    tags: ["ショートカット", "プロジェクト", "新規"],
    purposes: ["新規プロジェクト"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + N",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "新規シーケンス",
    kind: "shortcut",
    type: "ショートカット",
    description: "新しいシーケンスを作成する。",
    tags: ["ショートカット", "シーケンス", "新規"],
    purposes: ["新規シーケンス"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + N",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "開く",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトなどを開く。",
    tags: ["ショートカット", "ファイル", "開く"],
    purposes: ["ファイルを開く"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + O",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "閉じる",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在のウィンドウや項目を閉じる。",
    tags: ["ショートカット", "ファイル", "閉じる"],
    purposes: ["閉じる"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + W",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "プロジェクトを閉じる",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在のプロジェクトを閉じる。",
    tags: ["ショートカット", "プロジェクト"],
    purposes: ["プロジェクトを閉じる"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + W",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "保存",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトを保存する。",
    tags: ["ショートカット", "保存", "ファイル"],
    purposes: ["保存"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + S",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "名前を付けて保存",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトを別名で保存する。",
    tags: ["ショートカット", "保存"],
    purposes: ["名前を付けて保存"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + S",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "コピーを保存",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトのコピーを保存する。",
    tags: ["ショートカット", "保存", "バックアップ"],
    purposes: ["バックアップ"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + S",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "メディアブラウザーから読み込み",
    kind: "shortcut",
    type: "ショートカット",
    description: "メディアブラウザーから素材を読み込む。",
    tags: ["ショートカット", "読み込み", "メディア"],
    purposes: ["素材読み込み"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + I",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "読み込み",
    kind: "shortcut",
    type: "ショートカット",
    description: "素材を読み込む。",
    tags: ["ショートカット", "読み込み", "インポート"],
    purposes: ["素材読み込み"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + I",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "書き出し",
    kind: "shortcut",
    type: "ショートカット",
    description: "書き出し画面を開く。",
    tags: ["ショートカット", "書き出し", "エクスポート"],
    purposes: ["書き出し"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "Media Encoderへ送信",
    kind: "shortcut",
    type: "ショートカット",
    description: "Adobe Media Encoderへ書き出しジョブを送る。",
    tags: ["ショートカット", "Media Encoder", "書き出し"],
    purposes: ["Media Encoderへ送信"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "プロパティ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択項目のプロパティを表示する。",
    tags: ["ショートカット", "プロパティ"],
    purposes: ["プロパティ表示"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + H",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "終了",
    kind: "shortcut",
    type: "ショートカット",
    description: "Premiereを終了する。",
    tags: ["ショートカット", "終了"],
    purposes: ["終了"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Q",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "取り消し",
    kind: "shortcut",
    type: "ショートカット",
    description: "直前の操作を取り消す。",
    tags: ["ショートカット", "編集", "Undo"],
    purposes: ["取り消し"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Z",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "やり直し",
    kind: "shortcut",
    type: "ショートカット",
    description: "取り消した操作をやり直す。",
    tags: ["ショートカット", "編集", "Redo"],
    purposes: ["やり直し"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + Z",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "カット",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した項目をカットする。",
    tags: ["ショートカット", "編集", "カット"],
    purposes: ["カット"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + X",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "コピー",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した項目をコピーする。",
    tags: ["ショートカット", "編集", "コピー"],
    purposes: ["コピー"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + C",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "ペースト",
    kind: "shortcut",
    type: "ショートカット",
    description: "コピーした項目を貼り付ける。",
    tags: ["ショートカット", "編集", "貼り付け"],
    purposes: ["貼り付け"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + V",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "属性をペースト",
    kind: "shortcut",
    type: "ショートカット",
    description: "クリップの属性を別クリップへ貼り付ける。",
    tags: ["ショートカット", "属性", "貼り付け"],
    purposes: ["属性をコピー"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + V",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "消去",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択項目を削除する。",
    tags: ["ショートカット", "削除"],
    purposes: ["削除"],
    steps: "キーボードで実行。",
    shortcut: "Delete",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "リップル削除",
    kind: "shortcut",
    type: "ショートカット",
    description: "クリップを削除し後ろのクリップを詰める。",
    tags: ["ショートカット", "リップル", "削除"],
    purposes: ["リップル削除"],
    steps: "キーボードで実行。",
    shortcut: "Shift + Delete",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "複製",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した項目を複製する。",
    tags: ["ショートカット", "複製"],
    purposes: ["複製"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + /",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "すべてを選択",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在の範囲の項目をすべて選択する。",
    tags: ["ショートカット", "選択"],
    purposes: ["全選択"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + A",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "選択解除",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在の選択を解除する。",
    tags: ["ショートカット", "選択"],
    purposes: ["選択解除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + A",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "検索",
    kind: "shortcut",
    type: "ショートカット",
    description: "検索機能を開く。",
    tags: ["ショートカット", "検索"],
    purposes: ["検索"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + F",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オリジナルを編集",
    kind: "shortcut",
    type: "ショートカット",
    description: "元の素材を編集する。",
    tags: ["ショートカット", "編集", "オリジナル"],
    purposes: ["オリジナルを編集"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + E",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "キーボードショートカット",
    kind: "shortcut",
    type: "ショートカット",
    description: "キーボードショートカット設定を開く。",
    tags: ["ショートカット", "設定"],
    purposes: ["ショートカット設定"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + K",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "サブクリップを作成",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した素材からサブクリップを作成する。",
    tags: ["ショートカット", "サブクリップ"],
    purposes: ["サブクリップ作成"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + U",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオチャンネル",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオチャンネル設定を開く。",
    tags: ["ショートカット", "音声"],
    purposes: ["オーディオチャンネル"],
    steps: "キーボードで実行。",
    shortcut: "Shift + G",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオゲイン",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオゲイン設定を開く。",
    tags: ["ショートカット", "音声", "ゲイン"],
    purposes: ["オーディオゲイン"],
    steps: "キーボードで実行。",
    shortcut: "G",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "速度・デュレーション",
    kind: "shortcut",
    type: "ショートカット",
    description: "クリップ速度とデュレーションを設定する。",
    tags: ["ショートカット", "速度", "尺"],
    purposes: ["速度変更", "長さ変更"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + R",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "挿入",
    kind: "shortcut",
    type: "ショートカット",
    description: "素材をシーケンスへ挿入する。",
    tags: ["ショートカット", "挿入"],
    purposes: ["挿入編集"],
    steps: "キーボードで実行。",
    shortcut: ",",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "上書き",
    kind: "shortcut",
    type: "ショートカット",
    description: "素材をシーケンスへ上書きする。",
    tags: ["ショートカット", "上書き"],
    purposes: ["上書き編集"],
    steps: "キーボードで実行。",
    shortcut: ".",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "有効",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択クリップの有効・無効を切り替える。",
    tags: ["ショートカット", "クリップ", "有効"],
    purposes: ["クリップ有効切替"],
    steps: "キーボードで実行。",
    shortcut: "Shift + E",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "リンク",
    kind: "shortcut",
    type: "ショートカット",
    description: "ビデオとオーディオのリンクを切り替える。",
    tags: ["ショートカット", "リンク", "クリップ"],
    purposes: ["リンク切替"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + L",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "グループ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択項目をグループ化する。",
    tags: ["ショートカット", "グループ"],
    purposes: ["グループ化"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + G",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "グループ解除",
    kind: "shortcut",
    type: "ショートカット",
    description: "グループを解除する。",
    tags: ["ショートカット", "グループ"],
    purposes: ["グループ解除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + G",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "レンダリング",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点からアウト点までレンダリングする。",
    tags: ["ショートカット", "レンダリング"],
    purposes: ["レンダリング"],
    steps: "キーボードで実行。",
    shortcut: "Enter",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "マッチフレーム",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在のフレームに対応するソースを表示する。",
    tags: ["ショートカット", "マッチフレーム"],
    purposes: ["マッチフレーム"],
    steps: "キーボードで実行。",
    shortcut: "F",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "逆マッチフレーム",
    kind: "shortcut",
    type: "ショートカット",
    description: "逆方向のマッチフレームを実行する。",
    tags: ["ショートカット", "マッチフレーム"],
    purposes: ["逆マッチフレーム"],
    steps: "キーボードで実行。",
    shortcut: "Shift + R",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "編集点を追加",
    kind: "shortcut",
    type: "ショートカット",
    description: "再生ヘッド位置で編集点を追加する。",
    tags: ["ショートカット", "編集点", "カット"],
    purposes: ["編集点追加"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + K",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "すべてのトラックに編集点",
    kind: "shortcut",
    type: "ショートカット",
    description: "すべての対象トラックに編集点を追加する。",
    tags: ["ショートカット", "編集点", "全トラック"],
    purposes: ["全トラック編集点"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + K",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "トリミング編集",
    kind: "shortcut",
    type: "ショートカット",
    description: "トリミングモードへ移行する。",
    tags: ["ショートカット", "トリミング"],
    purposes: ["トリミング編集"],
    steps: "キーボードで実行。",
    shortcut: "Shift + T",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "選択した編集点を再生ヘッドまで変更",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した編集点を再生ヘッド位置まで変更する。",
    tags: ["ショートカット", "トリミング", "編集点"],
    purposes: ["編集点移動"],
    steps: "キーボードで実行。",
    shortcut: "E",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "ビデオトランジションを適用",
    kind: "shortcut",
    type: "ショートカット",
    description: "デフォルトのビデオトランジションを適用する。",
    tags: ["ショートカット", "トランジション"],
    purposes: ["ビデオトランジション"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + D",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオトランジションを適用",
    kind: "shortcut",
    type: "ショートカット",
    description: "デフォルトのオーディオトランジションを適用する。",
    tags: ["ショートカット", "オーディオ", "トランジション"],
    purposes: ["オーディオトランジション"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + D",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "デフォルトのトランジションを適用",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択した項目にデフォルトトランジションを適用する。",
    tags: ["ショートカット", "トランジション"],
    purposes: ["デフォルトトランジション"],
    steps: "キーボードで実行。",
    shortcut: "Shift + D",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "リフト",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点からアウト点までを削除し、その範囲を空ける。",
    tags: ["ショートカット", "リフト"],
    purposes: ["リフト編集"],
    steps: "キーボードで実行。",
    shortcut: ";",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "抽出",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点からアウト点までを削除して後ろを詰める。",
    tags: ["ショートカット", "抽出"],
    purposes: ["抽出編集"],
    steps: "キーボードで実行。",
    shortcut: ":",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "ズームイン",
    kind: "shortcut",
    type: "ショートカット",
    description: "タイムラインを拡大表示する。",
    tags: ["ショートカット", "タイムライン", "ズーム"],
    purposes: ["ズームイン"],
    steps: "キーボードで実行。",
    shortcut: "=",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "ズームアウト",
    kind: "shortcut",
    type: "ショートカット",
    description: "タイムラインを縮小表示する。",
    tags: ["ショートカット", "タイムライン", "ズーム"],
    purposes: ["ズームアウト"],
    steps: "キーボードで実行。",
    shortcut: "-",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "次の編集点へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "次の編集点へ移動する。",
    tags: ["ショートカット", "編集点", "移動"],
    purposes: ["次の編集点"],
    steps: "キーボードで実行。",
    shortcut: "Shift + ;",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "前の編集点へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "前の編集点へ移動する。",
    tags: ["ショートカット", "編集点", "移動"],
    purposes: ["前の編集点"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + ;",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "スナップ",
    kind: "shortcut",
    type: "ショートカット",
    description: "タイムラインのスナップ機能を切り替える。",
    tags: ["ショートカット", "スナップ", "タイムライン"],
    purposes: ["スナップ切替"],
    steps: "キーボードで実行。",
    shortcut: "S",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "サブシーケンスを作成",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択範囲からサブシーケンスを作る。",
    tags: ["ショートカット", "シーケンス"],
    purposes: ["サブシーケンス"],
    steps: "キーボードで実行。",
    shortcut: "Shift + U",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "新しいキャプショントラックを追加",
    kind: "shortcut",
    type: "ショートカット",
    description: "新しいキャプショントラックを追加する。",
    tags: ["ショートカット", "キャプション"],
    purposes: ["キャプショントラック追加"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + A",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "再生ヘッドにキャプションを追加",
    kind: "shortcut",
    type: "ショートカット",
    description: "再生ヘッド位置にキャプションを追加する。",
    tags: ["ショートカット", "キャプション"],
    purposes: ["キャプション追加"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + C",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "次のキャプションセグメント",
    kind: "shortcut",
    type: "ショートカット",
    description: "次のキャプションセグメントへ移動する。",
    tags: ["ショートカット", "キャプション"],
    purposes: ["次のキャプション"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + Down",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "前のキャプションセグメント",
    kind: "shortcut",
    type: "ショートカット",
    description: "前のキャプションセグメントへ移動する。",
    tags: ["ショートカット", "キャプション"],
    purposes: ["前のキャプション"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + Up",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "イン点",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在位置をイン点に設定する。",
    tags: ["ショートカット", "イン点", "マーカー"],
    purposes: ["イン点設定"],
    steps: "キーボードで実行。",
    shortcut: "I",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "アウト点",
    kind: "shortcut",
    type: "ショートカット",
    description: "現在位置をアウト点に設定する。",
    tags: ["ショートカット", "アウト点", "マーカー"],
    purposes: ["アウト点設定"],
    steps: "キーボードで実行。",
    shortcut: "O",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "クリップをマーク",
    kind: "shortcut",
    type: "ショートカット",
    description: "クリップ範囲をマークする。",
    tags: ["ショートカット", "マーカー", "クリップ"],
    purposes: ["クリップをマーク"],
    steps: "キーボードで実行。",
    shortcut: "X",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "選択範囲をマーク",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択範囲をイン・アウトとして設定する。",
    tags: ["ショートカット", "マーカー", "選択"],
    purposes: ["選択範囲マーク"],
    steps: "キーボードで実行。",
    shortcut: "/",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "イン点へ移動",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点へ移動する。",
    tags: ["ショートカット", "マーカー", "移動"],
    purposes: ["イン点へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Shift + I",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "アウト点へ移動",
    kind: "shortcut",
    type: "ショートカット",
    description: "アウト点へ移動する。",
    tags: ["ショートカット", "マーカー", "移動"],
    purposes: ["アウト点へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Shift + O",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "イン点をクリア",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点を解除する。",
    tags: ["ショートカット", "マーカー", "解除"],
    purposes: ["イン点解除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + I",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "アウト点をクリア",
    kind: "shortcut",
    type: "ショートカット",
    description: "アウト点を解除する。",
    tags: ["ショートカット", "マーカー", "解除"],
    purposes: ["アウト点解除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + O",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "イン/アウトをクリア",
    kind: "shortcut",
    type: "ショートカット",
    description: "イン点とアウト点をまとめて解除する。",
    tags: ["ショートカット", "マーカー", "解除"],
    purposes: ["イン・アウト解除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + X",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "マーカー",
    kind: "shortcut",
    type: "ショートカット",
    description: "再生ヘッド位置にマーカーを追加する。",
    tags: ["ショートカット", "マーカー"],
    purposes: ["マーカー追加"],
    steps: "キーボードで実行。",
    shortcut: "M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "次のマーカー",
    kind: "shortcut",
    type: "ショートカット",
    description: "次のマーカーへ移動する。",
    tags: ["ショートカット", "マーカー", "移動"],
    purposes: ["次のマーカー"],
    steps: "キーボードで実行。",
    shortcut: "Shift + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "前のマーカー",
    kind: "shortcut",
    type: "ショートカット",
    description: "前のマーカーへ移動する。",
    tags: ["ショートカット", "マーカー", "移動"],
    purposes: ["前のマーカー"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "選択したマーカーをクリア",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択したマーカーを削除する。",
    tags: ["ショートカット", "マーカー", "削除"],
    purposes: ["マーカー削除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "すべてのマーカーをクリア",
    kind: "shortcut",
    type: "ショートカット",
    description: "すべてのマーカーを削除する。",
    tags: ["ショートカット", "マーカー", "削除"],
    purposes: ["全マーカー削除"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + Shift + M",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "新しいテキスト",
    kind: "shortcut",
    type: "ショートカット",
    description: "新しいテキストレイヤーを作成する。",
    tags: ["ショートカット", "文字", "テキスト"],
    purposes: ["テキスト作成"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + T",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "長方形",
    kind: "shortcut",
    type: "ショートカット",
    description: "長方形のグラフィックを作成する。",
    tags: ["ショートカット", "図形"],
    purposes: ["長方形作成"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + R",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "楕円",
    kind: "shortcut",
    type: "ショートカット",
    description: "楕円形のグラフィックを作成する。",
    tags: ["ショートカット", "図形"],
    purposes: ["楕円作成"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + E",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "最前面へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択したレイヤーを最前面へ移動する。",
    tags: ["ショートカット", "レイヤー"],
    purposes: ["最前面へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + ]",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "前面へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択したレイヤーを1つ前へ移動する。",
    tags: ["ショートカット", "レイヤー"],
    purposes: ["前面へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + ]",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "背面へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択したレイヤーを1つ後ろへ移動する。",
    tags: ["ショートカット", "レイヤー"],
    purposes: ["背面へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + [",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "最背面へ",
    kind: "shortcut",
    type: "ショートカット",
    description: "選択したレイヤーを最背面へ移動する。",
    tags: ["ショートカット", "レイヤー"],
    purposes: ["最背面へ移動"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Shift + [",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "次のレイヤーを選択",
    kind: "shortcut",
    type: "ショートカット",
    description: "次のレイヤーを選択する。",
    tags: ["ショートカット", "レイヤー", "選択"],
    purposes: ["次のレイヤー"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + ]",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "前のレイヤーを選択",
    kind: "shortcut",
    type: "ショートカット",
    description: "前のレイヤーを選択する。",
    tags: ["ショートカット", "レイヤー", "選択"],
    purposes: ["前のレイヤー"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + [",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "すべてのパネル",
    kind: "shortcut",
    type: "ショートカット",
    description: "すべてのパネルワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "パネル"],
    purposes: ["全パネル"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 1",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "アセンブリ",
    kind: "shortcut",
    type: "ショートカット",
    description: "アセンブリワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース"],
    purposes: ["アセンブリ"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 2",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオ",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "音"],
    purposes: ["オーディオワークスペース"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 3",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "キャプションとグラフィック",
    kind: "shortcut",
    type: "ショートカット",
    description: "キャプションとグラフィックワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "キャプション"],
    purposes: ["キャプションワークスペース"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 4",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "カラー",
    kind: "shortcut",
    type: "ショートカット",
    description: "カラー作業用ワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "カラー"],
    purposes: ["カラー"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 5",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "編集",
    kind: "shortcut",
    type: "ショートカット",
    description: "編集ワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "編集"],
    purposes: ["編集"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 6",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "エフェクト",
    kind: "shortcut",
    type: "ショートカット",
    description: "エフェクトワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース", "エフェクト"],
    purposes: ["エフェクト"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 7",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "エッセンシャル",
    kind: "shortcut",
    type: "ショートカット",
    description: "エッセンシャルワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース"],
    purposes: ["エッセンシャル"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 8",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "学習",
    kind: "shortcut",
    type: "ショートカット",
    description: "学習ワークスペースを開く。",
    tags: ["ショートカット", "ワークスペース"],
    purposes: ["学習"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 9",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "保存したレイアウトにリセット",
    kind: "shortcut",
    type: "ショートカット",
    description: "ワークスペースを保存済みレイアウトへ戻す。",
    tags: ["ショートカット", "ワークスペース", "リセット"],
    purposes: ["レイアウトリセット"],
    steps: "キーボードで実行。",
    shortcut: "Alt + Shift + 0",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオクリップミキサー",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオクリップミキサーを開く。",
    tags: ["ショートカット", "オーディオ", "パネル"],
    purposes: ["オーディオクリップミキサー"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 9",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオトラックミキサー",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオトラックミキサーを開く。",
    tags: ["ショートカット", "オーディオ", "パネル"],
    purposes: ["オーディオトラックミキサー"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 6",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "エフェクトコントロール",
    kind: "shortcut",
    type: "ショートカット",
    description: "エフェクトコントロールパネルを開く。",
    tags: ["ショートカット", "エフェクト", "パネル"],
    purposes: ["エフェクトコントロール"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 5",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "エフェクトパネル",
    kind: "shortcut",
    type: "ショートカット",
    description: "エフェクトパネルを開く。",
    tags: ["ショートカット", "エフェクト", "パネル"],
    purposes: ["エフェクトパネル"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 7",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "メディアブラウザー",
    kind: "shortcut",
    type: "ショートカット",
    description: "メディアブラウザーパネルを開く。",
    tags: ["ショートカット", "メディア", "パネル"],
    purposes: ["メディアブラウザー"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 8",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "プログラムモニター",
    kind: "shortcut",
    type: "ショートカット",
    description: "プログラムモニターパネルを開く。",
    tags: ["ショートカット", "モニター", "パネル"],
    purposes: ["プログラムモニター"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 4",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "プロジェクトパネル",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトパネルを開く。",
    tags: ["ショートカット", "プロジェクト", "パネル"],
    purposes: ["プロジェクトパネル"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 1",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "ソースモニター",
    kind: "shortcut",
    type: "ショートカット",
    description: "ソースモニターパネルを開く。",
    tags: ["ショートカット", "モニター", "パネル"],
    purposes: ["ソースモニター"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 2",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "タイムライン",
    kind: "shortcut",
    type: "ショートカット",
    description: "タイムラインパネルを開く。",
    tags: ["ショートカット", "タイムライン", "パネル"],
    purposes: ["タイムライン"],
    steps: "キーボードで実行。",
    shortcut: "Shift + 3",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "オーディオトラックを表示/非表示",
    kind: "shortcut",
    type: "ショートカット",
    description: "オーディオトラックの表示・非表示を切り替える。",
    tags: ["ショートカット", "オーディオ", "トラック"],
    purposes: ["オーディオトラック表示切替"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + Alt + T",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "プロジェクトで新規ビン",
    kind: "shortcut",
    type: "ショートカット",
    description: "プロジェクトパネルに新しいビンを作成する。",
    tags: ["ショートカット", "プロジェクト", "ビン"],
    purposes: ["新規ビン"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + B",
    info: "Windows標準ショートカット。",
    status: "current"
  },

  {
    name: "エフェクトで新規カスタムビン",
    kind: "shortcut",
    type: "ショートカット",
    description: "エフェクトパネルにカスタムビンを作成する。",
    tags: ["ショートカット", "エフェクト", "ビン"],
    purposes: ["新規カスタムビン"],
    steps: "キーボードで実行。",
    shortcut: "Ctrl + /",
    info: "Windows標準ショートカット。",
    status: "current"
  }

];