const effects = [
  {
    "name": "Gaussian Blur",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像や文字を滑らかにぼかす定番ブラー。",
    "tags": [
      "ぼかし",
      "光"
    ],
    "purposes": [
      "背景ぼかし",
      "文字を柔らかく",
      "光を広げる"
    ],
    "steps": "エフェクトパネルからGaussian Blurを検索して適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Directional Blur",
    "kind": "effect",
    "type": "エフェクト",
    "description": "指定方向に伸びるようにぼかす。",
    "tags": [
      "ぼかし",
      "速度"
    ],
    "purposes": [
      "スピード感",
      "横/縦ブラー"
    ],
    "steps": "エフェクトパネルから適用し、DirectionとBlur Lengthを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Sharpen",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像の輪郭を強調してくっきりさせる。",
    "tags": [
      "ぼかし",
      "色"
    ],
    "purposes": [
      "ディテール強調",
      "ぼやけ補正"
    ],
    "steps": "エフェクトパネルから適用してSharpen Amountを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Lumetri Color",
    "kind": "effect",
    "type": "エフェクト",
    "description": "露出・コントラスト・色温度・彩度などを総合調整。",
    "tags": [
      "色"
    ],
    "purposes": [
      "カラーグレーディング",
      "色味補正",
      "映画風"
    ],
    "steps": "Lumetri Colorを適用し、Lumetriカラーで基本補正・クリエイティブ等を調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Lumetri Color Curves",
    "kind": "effect",
    "type": "エフェクト",
    "description": "RGBや色相をカーブで細かく補正する。",
    "tags": [
      "色"
    ],
    "purposes": [
      "コントラスト",
      "色補正"
    ],
    "steps": "Lumetriカラー > カーブでRGBカーブや色相カーブを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Lumetri Color Wheels",
    "kind": "effect",
    "type": "エフェクト",
    "description": "シャドウ・ミッドトーン・ハイライトの色を個別調整。",
    "tags": [
      "色"
    ],
    "purposes": [
      "映画風",
      "色かぶり補正"
    ],
    "steps": "Lumetriカラー > カラーホイールとカラーマッチを使用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Ultra Key",
    "kind": "effect",
    "type": "エフェクト",
    "description": "指定色を抜いて透明化するクロマキー。",
    "tags": [
      "クロマキー"
    ],
    "purposes": [
      "緑背景削除",
      "人物切り抜き"
    ],
    "steps": "Ultra Keyを適用し、キーカラーのスポイトで背景色を指定。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Transform",
    "kind": "effect",
    "type": "エフェクト",
    "description": "位置・スケール・回転などを個別に制御。",
    "tags": [
      "文字",
      "速度"
    ],
    "purposes": [
      "ズーム",
      "回転",
      "画面移動"
    ],
    "steps": "Transformを適用してモーションの各値をキーフレーム化。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Crop",
    "kind": "effect",
    "type": "エフェクト",
    "description": "上下左右を割合で切り抜く。",
    "tags": [
      "文字"
    ],
    "purposes": [
      "黒帯",
      "画面切り抜き"
    ],
    "steps": "Cropを適用してLeft/Right/Top/Bottomを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Warp Stabilizer",
    "kind": "effect",
    "type": "エフェクト",
    "description": "手ブレを解析して映像を安定させる。",
    "tags": [
      "歪み",
      "速度"
    ],
    "purposes": [
      "手ブレ補正",
      "歩き撮り補正"
    ],
    "steps": "Warp Stabilizerを適用し、解析完了後Smoothness等を調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Turbulent Displace",
    "kind": "effect",
    "type": "エフェクト",
    "description": "ノイズを使って映像を不規則に歪ませる。",
    "tags": [
      "歪み",
      "ホラー"
    ],
    "purposes": [
      "グニャグニャ",
      "ホラー",
      "揺れ"
    ],
    "steps": "エフェクトパネルで検索して適用し、Amount/Sizeなどを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Wave Warp",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像を波状に変形する。",
    "tags": [
      "歪み"
    ],
    "purposes": [
      "水面",
      "波",
      "揺れ"
    ],
    "steps": "Wave Warpを適用してWave Height/Widthなどを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Noise",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像にランダムなノイズを追加する。",
    "tags": [
      "ノイズ"
    ],
    "purposes": [
      "フィルム風",
      "ざらつき",
      "質感"
    ],
    "steps": "Noiseを適用しAmountを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Posterize Time",
    "kind": "effect",
    "type": "エフェクト",
    "description": "フレームレートを制限してカクカクした動きを作る。",
    "tags": [
      "速度",
      "文字"
    ],
    "purposes": [
      "コマ落ち",
      "アニメ風"
    ],
    "steps": "Posterize Timeを適用してFrame Rateを指定。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Black & White",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像をモノクロ化する。",
    "tags": [
      "色"
    ],
    "purposes": [
      "白黒",
      "回想"
    ],
    "steps": "Black & Whiteを適用するだけでモノクロ化。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Tint",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像を指定した色味へ置き換える。",
    "tags": [
      "色"
    ],
    "purposes": [
      "単色加工",
      "色味変更"
    ],
    "steps": "Tintを適用してMap Black To / Map White Toを設定。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Sharpen",
    "kind": "effect",
    "type": "エフェクト",
    "description": "映像の細部を強調する。",
    "tags": [
      "色"
    ],
    "purposes": [
      "輪郭強調",
      "映像補正"
    ],
    "steps": "Sharpenを適用してAmountを調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Cross Dissolve",
    "kind": "transition",
    "type": "トランジション",
    "description": "前後の映像を徐々に入れ替える定番トランジション。",
    "tags": [
      "切り替え"
    ],
    "purposes": [
      "自然な場面転換",
      "フェード"
    ],
    "steps": "エフェクト > ビデオトランジション > ディゾルブから適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Dip to Black",
    "kind": "transition",
    "type": "トランジション",
    "description": "一度黒に落としてから次の映像へ切り替える。",
    "tags": [
      "切り替え"
    ],
    "purposes": [
      "時間経過",
      "場面転換"
    ],
    "steps": "ビデオトランジションからDip to Blackを適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Dip to White",
    "kind": "transition",
    "type": "トランジション",
    "description": "一度白にしてから次の映像へ切り替える。",
    "tags": [
      "切り替え"
    ],
    "purposes": [
      "明るい場面転換",
      "フラッシュ風"
    ],
    "steps": "ビデオトランジションからDip to Whiteを適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Film Dissolve",
    "kind": "transition",
    "type": "トランジション",
    "description": "フィルム風の柔らかなディゾルブ。",
    "tags": [
      "切り替え"
    ],
    "purposes": [
      "映画風",
      "柔らかい切り替え"
    ],
    "steps": "ビデオトランジションからFilm Dissolveを適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Constant Power",
    "kind": "audio",
    "type": "オーディオトランジション",
    "description": "音声を滑らかにつなぐ定番オーディオトランジション。",
    "tags": [
      "音",
      "切り替え"
    ],
    "purposes": [
      "BGMつなぎ",
      "音声クロスフェード"
    ],
    "steps": "オーディオトランジションからConstant Powerを適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Exponential Fade",
    "kind": "audio",
    "type": "オーディオトランジション",
    "description": "自然な音量カーブで音声をフェードさせる。",
    "tags": [
      "音"
    ],
    "purposes": [
      "音声フェードアウト",
      "BGM終了"
    ],
    "steps": "オーディオトランジションからExponential Fadeを適用。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "DeNoise",
    "kind": "audio",
    "type": "オーディオエフェクト",
    "description": "環境音やホワイトノイズなどの雑音を軽減する。",
    "tags": [
      "音",
      "ノイズ"
    ],
    "purposes": [
      "雑音除去",
      "環境音軽減"
    ],
    "steps": "オーディオエフェクトからDeNoiseを適用してReduction量を調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Parametric Equalizer",
    "kind": "audio",
    "type": "オーディオエフェクト",
    "description": "音域ごとの音量を細かく調整するEQ。",
    "tags": [
      "音"
    ],
    "purposes": [
      "声を聞きやすく",
      "低音調整",
      "高音調整"
    ],
    "steps": "Parametric Equalizerを適用して周波数帯域を調整。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Dynamics",
    "kind": "audio",
    "type": "オーディオエフェクト",
    "description": "音量差を整えて声などを聞きやすくする。",
    "tags": [
      "音"
    ],
    "purposes": [
      "声の音量安定",
      "音圧調整"
    ],
    "steps": "Dynamicsを適用しCompressorやLimiterを設定。",
    "shortcut": "",
    "info": ""
  },
  {
    "name": "Razor Tool",
    "kind": "tool",
    "type": "ツール",
    "description": "クリップを分割する基本ツール。",
    "tags": [
      "切り替え"
    ],
    "purposes": [
      "カット",
      "動画分割"
    ],
    "steps": "Razor Toolを選択してクリップ上をクリック。",
    "shortcut": "C",
    "info": ""
  },
  {
    "name": "Selection Tool",
    "kind": "tool",
    "type": "ツール",
    "description": "クリップを選択・移動する基本ツール。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "選択",
      "移動"
    ],
    "steps": "Selection Toolを選択してクリップを操作。",
    "shortcut": "V",
    "info": ""
  },
  {
    "name": "Track Select Forward Tool",
    "kind": "tool",
    "type": "ツール",
    "description": "クリックした位置より後ろのクリップをまとめて選択。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "まとめて移動",
      "タイムライン整理"
    ],
    "steps": "Track Select Forward Toolを選択してクリップをクリック。",
    "shortcut": "A",
    "info": ""
  },
  {
    "name": "Hand Tool",
    "kind": "tool",
    "type": "ツール",
    "description": "タイムラインなどをドラッグして表示位置を移動。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "タイムライン移動"
    ],
    "steps": "Hand Toolを選択してドラッグ。",
    "shortcut": "H",
    "info": ""
  },
  {
    "name": "Zoom Tool",
    "kind": "tool",
    "type": "ツール",
    "description": "タイムラインを拡大・縮小表示する。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "タイムライン拡大"
    ],
    "steps": "Zoom Toolを選択してクリック。",
    "shortcut": "Z",
    "info": ""
  },
  {
    "name": "イン点",
    "kind": "shortcut",
    "type": "ショートカット",
    "description": "再生ヘッド位置をイン点にする。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "イン点"
    ],
    "steps": "キーボードで実行。",
    "shortcut": "I",
    "info": ""
  },
  {
    "name": "アウト点",
    "kind": "shortcut",
    "type": "ショートカット",
    "description": "再生ヘッド位置をアウト点にする。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "アウト点"
    ],
    "steps": "キーボードで実行。",
    "shortcut": "O",
    "info": ""
  },
  {
    "name": "再生/停止",
    "kind": "shortcut",
    "type": "ショートカット",
    "description": "再生・停止を切り替える。",
    "tags": [
      "速度"
    ],
    "purposes": [
      "再生/停止"
    ],
    "steps": "キーボードで実行。",
    "shortcut": "Space",
    "info": ""
  },
  {
    "name": "書き出し",
    "kind": "shortcut",
    "type": "ショートカット",
    "description": "書き出し画面を開く。",
    "tags": [
      "文字"
    ],
    "purposes": [
      "書き出し"
    ],
    "steps": "キーボードで実行。",
    "shortcut": "Ctrl + M",
    "info": ""
  },
  {
    "name": "保存",
    "kind": "shortcut",
    "type": "ショートカット",
    "description": "プロジェクトを保存する。",
    "tags": [
      "文字"
    ],
    "purposes": [
      "保存"
    ],
    "steps": "キーボードで実行。",
    "shortcut": "Ctrl + S",
    "info": ""
  }
];