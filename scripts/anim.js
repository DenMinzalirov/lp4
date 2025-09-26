;(function (cjs, an) {
  var counter = 0
  var startBtn = document.getElementById('start-btn')
  var goBtn = document.getElementById('go-btn')
  var btnsStart = document.getElementById('btns_start')
  var btnsReady = document.getElementById('btns_ready')
  var cashBtn = document.getElementById('cash-btn')
  var particles = document.getElementById('particles-js')
  var popup2 = document.querySelector('.popup_2')
  var popupWindow2 = document.getElementById('popup__window_2')
  var p // shortcut to reference prototypes
  var lib = {}
  var ss = {}
  var img = {}
  lib.ssMetadata = [
    {
      name: 'slot_atlas_1',
      frames: [
        [0, 332, 144, 144],
        [0, 0, 302, 330],
        [304, 0, 196, 412],
        [146, 332, 144, 144],
      ],
    },
  ]
  ;(lib.AnMovieClip = function () {
    this.actionFrames = []
    this.ignorePause = false
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel)
    }
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this)
    }
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel)
    }
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this)
    }
  }).prototype = p = new cjs.MovieClip()
  // symbols:
  ;(lib.Blue = function () {
    this.initialize(ss['slot_atlas_1'])
    this.gotoAndStop(0)
  }).prototype = p = new cjs.Sprite()
  ;(lib.Group9 = function () {
    this.initialize(ss['slot_atlas_1'])
    this.gotoAndStop(1)
  }).prototype = p = new cjs.Sprite()
  ;(lib.Rectangle44 = function () {
    this.initialize(ss['slot_atlas_1'])
    this.gotoAndStop(2)
  }).prototype = p = new cjs.Sprite()
  ;(lib.Yellow = function () {
    this.initialize(ss['slot_atlas_1'])
    this.gotoAndStop(3)
  }).prototype = p = new cjs.Sprite()
  // helper functions:
  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    )
    clone.gotoAndStop(this.currentFrame)
    clone.paused = this.paused
    clone.framerate = this.framerate
    return clone
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip)
    prototype.clone = mc_symbol_clone
    prototype.nominalBounds = nominalBounds
    prototype.frameBounds = frameBounds
    return prototype
  }
  ;(lib.Symbol24 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#161824').s().p('EhQAAuRMAAAhchMCgBAAAMAAABchg')
    this.shape.setTransform(512.05, 296.05)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol24,
    new cjs.Rectangle(0, 0, 1024.1, 592.1),
    null
  )
  ;(lib.Symbol21 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#161824').s().p('AvxAKIAAgTIfjAAIAAATg')
    this.shape.setTransform(1301, 499)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_1.setTransform(1202, 475)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_2.setTransform(1202, 445)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_3.setTransform(1202, 415)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_4.setTransform(1202, 385)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_5.setTransform(1202, 355)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_6.setTransform(1202, 325)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_7.setTransform(1202, 295)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_8.setTransform(1202, 265)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_9.setTransform(1202, 235)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_10.setTransform(1202, 205)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_11.setTransform(1202, 175)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_12.setTransform(1202, 145)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_13.setTransform(1202, 115)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_14.setTransform(1202, 85)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_15.setTransform(1202, 55)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_16.setTransform(1202, 25)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .lf(
        ['rgba(255,242,124,0)', 'rgba(255,242,124,0.298)'],
        [0, 1],
        -1,
        169.6,
        -8.5,
        -54.9
      )
      .s()
      .p(
        'AnTX8MgC8gkwQgLiOAuiDQAuh/BbhkQBchjB7g4QCAg4CMAAQCOAACAA5QB7A3BcBlQBcBkAtB/QAuCEgMCOMgDHAktg'
      )
    this.shape_17.setTransform(1302.2929, 332.25)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .f('#CBC7AB')
      .s()
      .p('AkiAvQgnAAgcgbQgbgbAAgnIMBAAQAAAngcAbQgcAbgnAAg')
    this.shape_18.setTransform(1302.5, 452.725)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#CBC7AB')
      .s()
      .p('AkQAYQgUAAgNgOQgOgNAAgUIJ/AAQAAAUgNANQgOAOgUAAg')
    this.shape_19.setTransform(1302.475, 458.6)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#D6D2B9')
      .s()
      .p('AilCAQgJhFgrhRQgfg9gjgsII3AAQgvA9giBTQgZA+gJAxg')
    this.shape_20.setTransform(1302.325, 472.575)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics
      .f('#161824')
      .s()
      .p(
        'ArvcwMAAAgtvQAAiYA7iMQA5iHBohpQBohoCHg5QCMg7CYAAQCZAACMA7QCHA5BoBoQBoBpA5CHQA7CMAACYMAAAAtvg'
      )
    this.shape_21.setTransform(1302.475, 302)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics
      .f('#333852')
      .s()
      .p(
        'AsydsMAAAgukQAAimBBiYQA+iTBxhyQBxhxCTg/QCZhAClAAQCnAACYBAQCTA/BxBxQBxByA+CTQBBCYAACmMAAAAukg'
      )
    this.shape_22.setTransform(1302.475, 302)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics
      .f('#212538')
      .s()
      .p(
        'At0eoMAAAgvaQAAi0BFilQBDieB7h7QB7h6CehEQClhFCzAAQC0AACkBFQCfBEB6B6QB7B7BDCeQBGClAAC0MAAAAvag'
      )
    this.shape_23.setTransform(1302.5, 302)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics
      .f('#363B57')
      .s()
      .p(
        'AifDIQglAAgbgaQgagbAAglIAAjbQAAglAagbQAbgaAlAAIE/AAQAlAAAbAaQAaAbAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_24.setTransform(1354, 36)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#363B57')
      .s()
      .p(
        'AjlDIQgmAAgZgaQgbgaAAgmIAAjbQAAglAbgaQAZgbAmAAIHLAAQAlAAAbAbQAaAaAAAlIAADbQAAAmgaAaQgbAaglAAg'
      )
    this.shape_25.setTransform(1266, 86)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#363B57')
      .s()
      .p(
        'Ak1DIQgmAAgZgaQgbgaAAgmIAAjbQAAglAbgaQAZgbAmAAIJrAAQAlAAAaAbQAbAaAAAlIAADbQAAAmgbAaQgaAaglAAg'
      )
    this.shape_26.setTransform(1265, 338)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics.f('#3E4464').s().p('EgPxAnEMAAAhOHIfjAAMAAABOHg')
    this.shape_27.setTransform(1301, 250)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#161824').s().p('EhdvAAKIAAgTMC7fAAAIAAATg')
    this.shape_28.setTransform(600, 499)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_29.setTransform(1000, 475)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_30.setTransform(1000, 445)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_31.setTransform(1000, 415)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_32.setTransform(1000, 385)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_33.setTransform(1000, 355)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_34.setTransform(1000, 325)
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_35.setTransform(1000, 295)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_36.setTransform(1000, 265)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_37.setTransform(1000, 235)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_38.setTransform(1000, 205)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_39.setTransform(1000, 175)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_40.setTransform(1000, 145)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_41.setTransform(1000, 115)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_42.setTransform(1000, 85)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_43.setTransform(1000, 55)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_44.setTransform(1000, 25)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_45.setTransform(800, 475)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_46.setTransform(800, 445)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_47.setTransform(800, 415)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_48.setTransform(800, 385)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_49.setTransform(800, 355)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_50.setTransform(800, 325)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_51.setTransform(800, 295)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_52.setTransform(800, 265)
    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_53.setTransform(800, 235)
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_54.setTransform(800, 205)
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_55.setTransform(800, 175)
    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_56.setTransform(800, 145)
    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_57.setTransform(800, 115)
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_58.setTransform(800, 85)
    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_59.setTransform(800, 55)
    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_60.setTransform(800, 25)
    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_61.setTransform(600, 475)
    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_62.setTransform(600, 445)
    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_63.setTransform(600, 415)
    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_64.setTransform(600, 385)
    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_65.setTransform(600, 355)
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_66.setTransform(600, 325)
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_67.setTransform(600, 295)
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_68.setTransform(600, 265)
    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_69.setTransform(600, 235)
    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_70.setTransform(600, 205)
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_71.setTransform(600, 175)
    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_72.setTransform(600, 145)
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_73.setTransform(600, 115)
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_74.setTransform(600, 85)
    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_75.setTransform(600, 55)
    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_76.setTransform(600, 25)
    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_77.setTransform(400, 475)
    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_78.setTransform(400, 445)
    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_79.setTransform(400, 415)
    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_80.setTransform(400, 385)
    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_81.setTransform(400, 355)
    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_82.setTransform(400, 325)
    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_83.setTransform(400, 295)
    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_84.setTransform(400, 265)
    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_85.setTransform(400, 235)
    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_86.setTransform(400, 205)
    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_87.setTransform(400, 175)
    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_88.setTransform(400, 145)
    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_89.setTransform(400, 115)
    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_90.setTransform(400, 85)
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_91.setTransform(400, 55)
    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics.f('#9FA7CB').s().p('AgTBkIAAjHIAnAAIAADHg')
    this.shape_92.setTransform(400, 25)
    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f('#161824')
      .s()
      .p('AqncwMAAAgu3QAAkZDHjIQDHjHEZAAQEaAADHDHQDHDIAAEZMAAAAu3g')
    this.shape_93.setTransform(100, 302)
    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f('#333852')
      .s()
      .p(
        'ArjdsMAAAgvzQAAiWA6iKQA5iFBlhmQBnhnCFg4QCJg6CWAAQCWAACKA6QCFA4BmBnQBnBmA4CFQA6CKAACWMAAAAvzg'
      )
    this.shape_94.setTransform(100, 302)
    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#212538')
      .s()
      .p(
        'AsfeoMAAAgwvQAAiiA/iVQA9iQBvhvQBuhvCPg8QCVg/CiAAQCiAACVA/QCQA8BuBvQBwBvA8CQQA/CVAACiMAAAAwvg'
      )
    this.shape_95.setTransform(100, 302)
    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics
      .f('#363B57')
      .s()
      .p(
        'AjgDIQglAAgagaQgbgaAAgmIAAjbQAAglAbgaQAagbAlAAIHBAAQAlAAAaAbQAbAaAAAlIAADbQAAAmgbAaQgaAaglAAg'
      )
    this.shape_96.setTransform(899.5, 105)
    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics
      .f('#363B57')
      .s()
      .p(
        'AifDIQgmAAgZgaQgbgbAAglIAAjbQAAglAbgbQAZgaAmAAIE/AAQAlAAAaAaQAbAbAAAlIAADbQAAAlgbAbQgaAaglAAg'
      )
    this.shape_97.setTransform(1152, 36)
    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f('#363B57')
      .s()
      .p(
        'AjlDIQglAAgbgaQgagaAAgmIAAjbQAAglAagaQAbgbAlAAIHLAAQAlAAAaAbQAbAaAAAlIAADbQAAAmgbAaQgaAaglAAg'
      )
    this.shape_98.setTransform(1064, 86)
    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f('#363B57')
      .s()
      .p(
        'Ak1DIQglAAgbgaQgagaAAgmIAAjbQAAglAagaQAbgbAlAAIJrAAQAlAAAaAbQAbAaAAAlIAADbQAAAmgbAaQgaAaglAAg'
      )
    this.shape_99.setTransform(1063, 338)
    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics
      .f('#363B57')
      .s()
      .p(
        'AkDDIQglAAgagaQgbgbAAglIAAjbQAAglAbgbQAagaAlAAIIHAAQAlAAAbAaQAaAbAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_100.setTransform(714, 36)
    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics
      .f('#363B57')
      .s()
      .p(
        'AizDIQgmAAgagaQgagbAAglIAAjbQAAglAagbQAagaAmAAIFnAAQAlAAAaAaQAbAbAAAlIAADbQAAAlgbAbQgaAaglAAg'
      )
    this.shape_101.setTransform(673, 350)
    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics
      .f('#363B57')
      .s()
      .p(
        'AjHDIQgmAAgagaQgagaAAgmIAAjbQAAglAagaQAagbAmAAIGPAAQAlAAAaAbQAbAaAAAlIAADbQAAAmgbAaQgaAaglAAg'
      )
    this.shape_102.setTransform(524, 96)
    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics
      .f('#363B57')
      .s()
      .p(
        'AkNDIQglAAgbgaQgagbAAglIAAjbQAAglAagbQAbgaAlAAIIbAAQAlAAAaAaQAbAbAAAlIAADbQAAAlgbAbQgaAaglAAg'
      )
    this.shape_103.setTransform(464, 325)
    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics
      .f('#363B57')
      .s()
      .p(
        'AkNDIQgmAAgagaQgagbAAglIAAjbQAAglAagbQAagaAmAAIIbAAQAlAAAbAaQAaAbAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_104.setTransform(279, 55)
    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics
      .f('#363B57')
      .s()
      .p(
        'AipDIQgmAAgagaQgagbAAglIAAjbQAAglAagaQAagbAmAAIFTAAQAlAAAbAbQAaAaAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_105.setTransform(356, 346)
    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f('#23273B')
      .s()
      .p(
        'AipDIQglAAgbgaQgagbAAglIAAjbQAAglAagaQAbgbAlAAIFTAAQAlAAAbAbQAaAaAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_106.setTransform(157, 76)
    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f('#23273B')
      .s()
      .p(
        'AkDDIQgmAAgZgaQgbgbAAglIAAjbQAAglAbgbQAZgaAmAAIIHAAQAlAAAbAaQAaAbAAAlIAADbQAAAlgaAbQgbAaglAAg'
      )
    this.shape_107.setTransform(55, 36)
    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics.f('#2C324C').s().p('EgPnAnEMAAAhOHIfPAAMAAABOHg')
    this.shape_108.setTransform(100, 250)
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics
      .f('#606893')
      .s()
      .p('AsBA3IAAgKQAAgqAdgbQAegeApAAIVPAAQAhAAAYAXQAXAYAAAgIAAAeg')
    this.shape_109.setTransform(1100, 492.5)
    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAHVg')
    this.shape_110.setTransform(1148, 462)
    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAIvg')
    this.shape_111.setTransform(1132, 457.5)
    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAVIAAKJg')
    this.shape_112.setTransform(1116, 453)
    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics
      .f('#252738')
      .s()
      .p('AgxF8IAArFQAAgUAPgPQAOgPAUAAQAVAAAPAPQAOAPAAAUIAALFg')
    this.shape_113.setTransform(1100, 450)
    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAVAAAPAPQAOAOAAAVIAAKJg')
    this.shape_114.setTransform(1084, 453)
    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAIvg')
    this.shape_115.setTransform(1068, 457.5)
    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAHVg')
    this.shape_116.setTransform(1052, 462)
    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics
      .f('#363A56')
      .s()
      .p('ApSHbIAAljQAAj2CuiuQCuiuD2AAQD2AACvCuQCuCuAAD2IAAFjg')
    this.shape_117.setTransform(1099.5, 446.5)
    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f('#4A4F68')
      .s()
      .p('Ap6HvIAAljQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGIAAFjg')
    this.shape_118.setTransform(1099.5, 444.5)
    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f('#282C41')
      .s()
      .p('AqiIDIAAljQAAkWDFjGQDHjGEWAAQEXAADGDGQDGDGAAEWIAAFjg')
    this.shape_119.setTransform(1099.5, 442.5)
    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f('#606893')
      .s()
      .p('AsBA3IAAgKQAAgqAdgbQAdgeAqAAIVPAAQAhAAAXAXQAYAYAAAgIAAAeg')
    this.shape_120.setTransform(900, 492.5)
    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAHVg')
    this.shape_121.setTransform(948, 462)
    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAIvg')
    this.shape_122.setTransform(932, 457.5)
    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAKJg')
    this.shape_123.setTransform(916, 453)
    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f('#252738')
      .s()
      .p('AgxF8IAArFQAAgUAPgPQAOgPAUAAQAUAAAPAPQAPAPAAAUIAALFg')
    this.shape_124.setTransform(900, 450)
    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAKJg')
    this.shape_125.setTransform(884, 453)
    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAIvg')
    this.shape_126.setTransform(868, 457.5)
    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAHVg')
    this.shape_127.setTransform(852, 462)
    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics
      .f('#363A56')
      .s()
      .p('ApSHbIAAljQAAj2CuiuQCviuD1AAQD3AACuCuQCuCuAAD2IAAFjg')
    this.shape_128.setTransform(899.5, 446.5)
    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics
      .f('#4A4F68')
      .s()
      .p('Ap6HvIAAljQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGIAAFjg')
    this.shape_129.setTransform(899.5, 444.5)
    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f('#282C41')
      .s()
      .p('AqiIDIAAljQAAkWDGjGQDGjGEWAAQEYAADFDGQDGDGAAEWIAAFjg')
    this.shape_130.setTransform(899.5, 442.5)
    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f('#606893')
      .s()
      .p('AsBA3IAAgKQAAgqAdgbQAdgeAqAAIVPAAQAhAAAXAXQAYAYAAAgIAAAeg')
    this.shape_131.setTransform(500, 492.5)
    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAHVg')
    this.shape_132.setTransform(548, 462)
    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAVIAAIvg')
    this.shape_133.setTransform(532, 457.5)
    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAKJg')
    this.shape_134.setTransform(516, 453)
    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics
      .f('#252738')
      .s()
      .p('AgxF8IAArFQAAgUAOgPQAPgPAUAAQAUAAAPAPQAPAPAAAUIAALFg')
    this.shape_135.setTransform(500, 450)
    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAKJg')
    this.shape_136.setTransform(484, 453)
    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAVIAAIvg')
    this.shape_137.setTransform(468, 457.5)
    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAHVg')
    this.shape_138.setTransform(452, 462)
    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics
      .f('#363A56')
      .s()
      .p('ApSHbIAAljQAAj2CuiuQCviuD1AAQD2AACuCuQCvCuAAD2IAAFjg')
    this.shape_139.setTransform(499.5, 446.5)
    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics
      .f('#4A4F68')
      .s()
      .p('Ap6HvIAAljQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGIAAFjg')
    this.shape_140.setTransform(499.5, 444.5)
    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics
      .f('#282C41')
      .s()
      .p('AqiIDIAAljQAAkWDFjGQDGjGEXAAQEXAADGDGQDGDGAAEWIAAFjg')
    this.shape_141.setTransform(499.5, 442.5)
    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics
      .f('#606893')
      .s()
      .p('AsBA3IAAgKQAAgqAdgbQAegeApAAIVPAAQAhAAAXAXQAYAYAAAgIAAAeg')
    this.shape_142.setTransform(700, 492.5)
    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAVIAAHVg')
    this.shape_143.setTransform(748, 462)
    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAIvg')
    this.shape_144.setTransform(732, 457.5)
    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAKJg')
    this.shape_145.setTransform(716, 453)
    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f('#252738')
      .s()
      .p('AgxF8IAArFQAAgUAOgPQAPgPAUAAQAUAAAPAPQAPAPAAAUIAALFg')
    this.shape_146.setTransform(700, 450)
    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAVIAAKJg')
    this.shape_147.setTransform(684, 453)
    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAIvg')
    this.shape_148.setTransform(668, 457.5)
    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAPgOQAOgPAUAAQAVAAAPAPQAOAOAAAVIAAHVg')
    this.shape_149.setTransform(652, 462)
    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f('#363A56')
      .s()
      .p('ApSHbIAAljQAAj2CuiuQCuiuD2AAQD3AACtCuQCvCuAAD2IAAFjg')
    this.shape_150.setTransform(699.5, 446.5)
    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics
      .f('#4A4F68')
      .s()
      .p('Ap6HvIAAljQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGIAAFjg')
    this.shape_151.setTransform(699.5, 444.5)
    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics
      .f('#282C41')
      .s()
      .p('AqiIDIAAljQAAkWDGjGQDFjGEXAAQEYAADFDGQDGDGAAEWIAAFjg')
    this.shape_152.setTransform(699.5, 442.5)
    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics
      .f('#606893')
      .s()
      .p('AsBA3IAAgKQAAgqAdgbQAdgeAqAAIVPAAQAhAAAYAXQAXAYAAAgIAAAeg')
    this.shape_153.setTransform(300, 492.5)
    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAHVg')
    this.shape_154.setTransform(348, 462)
    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAIvg')
    this.shape_155.setTransform(332, 457.5)
    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAPgOQAOgPAUAAQAUAAAQAPQAOAOAAAVIAAKJg')
    this.shape_156.setTransform(316, 453)
    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f('#252738')
      .s()
      .p('AgxF8IAArFQAAgUAPgPQAOgPAUAAQAVAAAPAPQAOAPAAAUIAALFg')
    this.shape_157.setTransform(300, 450)
    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f('#252738')
      .s()
      .p('AgxFeIAAqJQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAKJg')
    this.shape_158.setTransform(284, 453)
    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics
      .f('#252738')
      .s()
      .p('AgxExIAAovQAAgVAOgOQAPgPAUAAQAUAAAPAPQAPAOAAAVIAAIvg')
    this.shape_159.setTransform(268, 457.5)
    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics
      .f('#252738')
      .s()
      .p('AgxEEIAAnVQAAgVAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAVIAAHVg')
    this.shape_160.setTransform(252, 462)
    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics
      .f('#363A56')
      .s()
      .p('ApSHbIAAljQAAj2CuiuQCviuD1AAQD2AACuCuQCvCuAAD2IAAFjg')
    this.shape_161.setTransform(299.5, 446.5)
    this.shape_162 = new cjs.Shape()
    this.shape_162.graphics
      .f('#4A4F68')
      .s()
      .p('Ap6HvIAAljQAAkGC6i6QC6i6EGAAQEHAAC6C6QC6C6AAEGIAAFjg')
    this.shape_162.setTransform(299.5, 444.5)
    this.shape_163 = new cjs.Shape()
    this.shape_163.graphics
      .f('#282C41')
      .s()
      .p('AqiIDIAAljQAAkWDFjGQDHjGEWAAQEXAADGDGQDGDGAAEWIAAFjg')
    this.shape_163.setTransform(299.5, 442.5)
    this.shape_164 = new cjs.Shape()
    this.shape_164.graphics.f('#3E4464').s().p('EhdvAnEMAAAhOHMC7fAAAMAAABOHg')
    this.shape_164.setTransform(600, 250)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_164 },
            { t: this.shape_163 },
            { t: this.shape_162 },
            { t: this.shape_161 },
            { t: this.shape_160 },
            { t: this.shape_159 },
            { t: this.shape_158 },
            { t: this.shape_157 },
            { t: this.shape_156 },
            { t: this.shape_155 },
            { t: this.shape_154 },
            { t: this.shape_153 },
            { t: this.shape_152 },
            { t: this.shape_151 },
            { t: this.shape_150 },
            { t: this.shape_149 },
            { t: this.shape_148 },
            { t: this.shape_147 },
            { t: this.shape_146 },
            { t: this.shape_145 },
            { t: this.shape_144 },
            { t: this.shape_143 },
            { t: this.shape_142 },
            { t: this.shape_141 },
            { t: this.shape_140 },
            { t: this.shape_139 },
            { t: this.shape_138 },
            { t: this.shape_137 },
            { t: this.shape_136 },
            { t: this.shape_135 },
            { t: this.shape_134 },
            { t: this.shape_133 },
            { t: this.shape_132 },
            { t: this.shape_131 },
            { t: this.shape_130 },
            { t: this.shape_129 },
            { t: this.shape_128 },
            { t: this.shape_127 },
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol21,
    new cjs.Rectangle(0, 0, 1402, 500),
    null
  )
  ;(lib.Symbol19 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Rectangle44()
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol19,
    new cjs.Rectangle(0, 0, 196, 412),
    null
  )
  ;(lib.Symbol17 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#433D18')
      .s()
      .p(
        'AgVA3QgRgGgFgVQgGgVAJgWQAJgXATgMQARgLARAHQAQAGAGAVQAGAVgJAWQgJAWgSANQgMAHgKAAQgGAAgHgDg'
      )
    this.shape.setTransform(4.65, 8.8)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#433D18')
      .s()
      .p(
        'AAEAqQgNgKgLgTQgMgTgCgRQgCgRAIgFQAWgNAaAuQAMAUADAPQACARgLAHQgCACgEAAQgGAAgKgHg'
      )
    this.shape_1.setTransform(68.6126, 4.8748)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol17,
    new cjs.Rectangle(0, 0, 72.2, 14.6),
    null
  )
  ;(lib.Symbol16 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#B8CACB')
      .s()
      .p(
        'AhfBLQgkgPgzgfQgzgdgWgUQgRgOgNgbQgKgWgEgSQASArA4AqQAqAeArASQCRA/BRgBQA7AEAvgTQAjgNAQgUQAggmAZiAIgMBUQgGAXgMAcQgOAjgNAUQgNAUglAOQgfANgkAEQh1AAhogug'
      )
    this.shape.setTransform(31.325, 39.625)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#DCEEF0')
      .s()
      .p(
        'AAiDvQhFgJgygSQgwgPg/gtQhFgxgWgqQgUgnABgkQAAgSAIgfQAJggAeguQAhg1AsgsIAGgHQAfAcAgAZQAqAfAOADQASgPASgTQAXgXAGgMQAOAKAeANQApARAzAMQAiAMAhAOQArASAOAKQhIgbg0gPQhcgcgbgOIhCBIQglgXghgXQgtgfgJgOIhZBuQACA7AjBBQAuBYBXAxQAzAdA/AQQBaAWBIgWQAogJAfgVQAMgPALgdQAQgtAGg6QgCAqgPA6QgTBFgXAVQgdAZgdAIQgKADgsAFIgLAAQgoAAg0gHg'
      )
    this.shape_1.setTransform(30.7494, 24.5806)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AAWD2QhMgXhKgiQhkgvgkguQgVgggLgiQgOgrAHglQAEghAbgwQAkhBA8g4QAeAeAgAZQAqAiARAAIA8hJQCsBNA+ANQAsAKAQA6QANAugIBCQgEAqgQAwQgUA+gcAfQgYAYg2AIQgZAEgcAAQgmAAgtgHg'
      )
    this.shape_2.setTransform(30.7955, 25.6134)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol16,
    new cjs.Rectangle(0, 0, 61.5, 51.7),
    null
  )
  ;(lib.Symbol15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFE969')
      .s()
      .p(
        'AgdAXQgGgJAEgMQAFgLAMgKQAMgJAMgBQANgBAGAIQAHAIgFANQgEALgMAKQgMAJgMABIgDAAQgLAAgGgHg'
      )
    this.shape.setTransform(90.662, 47.4041)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .rf(['#FFC800', '#FE9D00'], [0, 1], -1, -2.8, 0, -1, -2.8, 14.2)
      .s()
      .p(
        'AiLBkQgNgJgHgQQgKgWAIgXQAHgOANgIQARgKAUAJIACgCQAMgKAKgpQALgiAigTQAsgbBAAUQAhAMAaAZQAjAigCAoQAAAqgTAuQgEgOgNgLQgSgOgYgBQgRABgdALQgoAOgnAaQgXAJgZABIgFAAQgfAAgRgPg'
      )
    this.shape_1.setTransform(92.1078, 54.7178)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FF5251')
      .s()
      .p(
        'AgqBWQgRgGgNgTQgXgmAWgnQARgdAggTQAYADAggJQAXgGATgKQAPAUgHAMQgFAJgOACIgSAEQgJAEgJAIQgLAMgJAlIgKAsQgMAVgRAAIgKgBg'
      )
    this.shape_2.setTransform(84.0026, 70.7471)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .lf(['#FFB800', '#FDA000'], [0, 1], 0, 7.8, 0, -7.7)
      .s()
      .p(
        'AARBOQglgIgkggQgxgrgRhIIAvAAQASAnArAaQA7AiBOgOQgHAZgWAUQgcAZgrAAIgGAAg'
      )
    this.shape_3.setTransform(89.8, 70.232)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#2B2B2B')
      .s()
      .p('AhZAgQgLgHAFgqIBihCIBfAUQgqARgLAMQgQAVAKAiQAFAUASAgIgfALQhpgrgPgJg')
    this.shape_4.setTransform(94.4847, 66.25)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFEF9B')
      .s()
      .p(
        'Ah5B2Qgvg2ABhLQAAhFA1gsQA4guBfABQA1ABAnAtQAnAuAABCQAABBguA2QgsA1g6AHQgOACgMAAQhGAAgtg0g'
      )
    this.shape_5.setTransform(56.8, 44.2889)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#F3D872')
      .s()
      .p(
        'AiICRQgxg4AAhbQAAhWBHg+QBKhABeALQBAAAAjA0QAhAyAABWQAABYgoA9QgsBChLAGIgGAAQhmAAg3g9g'
      )
    this.shape_6.setTransform(54.975, 48.1405)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FF8989')
      .s()
      .p(
        'AieB1QgbgmAShjQA6haApgaQA0ghBaALIA1gBQAVAAAJAHQASAMAABNQgHBag1A/Qg3BChRAGQhrgFgegog'
      )
    this.shape_7.setTransform(55.969, 55.4264)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#000000')
      .s()
      .p(
        'AiQCRQgrgNABhIQgBhSBAg9QBDhBBlACQBGAFAmA5QAjA0AABSQgBBFhFAPQgWAFhtAAQhDAIgjAAQgUAAgJgCg'
      )
    this.shape_8.setTransform(54.85, 40.1842)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#FFEF9B')
      .s()
      .p(
        'AgIB0Qg5gfgQgkQgeg/ABgwQABg0AlgRQAlgRAuAeQAuAfAdA8QAbA4gDAwQgCArgWAMQgMAGgOAAQgdAAgngWg'
      )
    this.shape_9.setTransform(108.7592, 39.9588)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#F3D872')
      .s()
      .p(
        'AgTCRQg0gggfhAQgehBAIg7QAJg9AqgUQArgUAzAgQAzAfAfBCQAeBAgIA8QgIA8grAUQgQAIgSAAQgcAAgfgUg'
      )
    this.shape_10.setTransform(107.3405, 42.5)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#000000')
      .s()
      .p(
        'AgVCSQg1gfgfhBQgehAAJg9QAJg8AsgVQAsgUA0AfQA0AfAfBBQAfBAgKA9QgJA8gsAVQgRAIgTAAQgdAAgegTg'
      )
    this.shape_11.setTransform(106.9353, 40.3909)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#FF8989')
      .s()
      .p(
        'AgNBiQgogZgRgtQgTgtAIgpQAHgoAdgMQAdgLAgAZQAhAYASAuQATAwgCAlQgDAogcALQgJAEgLAAQgVAAgZgQg'
      )
    this.shape_12.setTransform(112.056, 48.5158)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#D7EBED')
      .s()
      .p(
        'AirDNQgWgcAHgrQARgnAlhHQArhWAihIQAjhMAngRQAegOAVAUQAhAcAeAgQAoArAMAbQALAbgYA8QgSArgdAvQghAxhDAsQgzAigvARQgTAEgPAAQgsAAgUgdg'
      )
    this.shape_13.setTransform(84.1253, 66.2499)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#D7EBED')
      .s()
      .p(
        'AhAA0QgHgLgFgQQgGgUACgPQAcACAhgNQAqgRAagmQASADAJAPQANAUgOAgQgKAQgPACQgVADgVgcQAHAtgOAYQgLARgQAEIgGAAQgSAAgOgZg'
      )
    this.shape_14.setTransform(99.1463, 100.1492)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#C9D4D5')
      .s()
      .p(
        'AgTFdQhmgJhcghQh8gugbhGIhYlSQAFg9ANg8QAShOAUgRQgSBsACB4QADCcAtA9QA6BRBsA8QBeA0B1AcQBfAYChgFQCKgEAugPQgVAShYAUQhkAXhlAAQhRAAhRgPg'
      )
    this.shape_15.setTransform(45.65, 97.3355)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .lf(['#FDFEFE', '#E4F3F6'], [0, 1], 19.9, 53.5, -12.6, -43.9)
      .s()
      .p(
        'AlKIgQjTgvhHi8Qg1iMAhiYQADgoARg1QAMgmAPgfIAjAVQgFgjAIgaQAFgUAKgIQAZgaAjgJQAagHAVADQgYBKAuAoQAhAeA1ADIAmh7IAAhZQgghiAig9QAYgqAwgPQBPgXBSAWQA0APBBAmQAcgJA5ADQA/ADAaAQQAVg/AwgcQAkgVAjAEQAkADANAhQAKAYgEAdIAJATIAAA2QAmArAfBtQAYBSALBPQBHBXgIBlQgCAcgJAiQgHAYACABQAmASAGAnQACAUgQANQgNAJgRACQAcAXABAdQAAAWgMAQQgTAUghgJQgYgHgVgSQgTAlg1AnQgnAcgnASQiYBgjoAIIgsABQiUAAh+gig'
      )
    this.shape_16.setTransform(64.5833, 75.5098)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .lf(['#A8BBBE', '#9DAFB1'], [0, 1], -0.1, 11.3, 2.2, -8.1)
      .s()
      .p('AgRB8QAOhYgVhTQgPg+gZgkQA3ALAkAuQAhApAEAtQACAmgSAwQgOAkgRAag')
    this.shape_17.setTransform(125.8058, 80.425)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .lf(['#FF2B2B', '#CF1818'], [0, 1], 13.7, 21, -10.2, -21.4)
      .s()
      .p(
        'AjFDXQgOgqgZgVIgCgBQgqgjgOgOQgVgVAEgNQAFgQAXgMQAbgPAogCQAIgDABgHQABgIgQgIQgVgKgLgOQgOgUAQgQQALgQAVgMQAcgPAhAFQBFALAZgCQAQgCAHgHQAIgKgRgQQg3gugNgSQgOgeA3gcQBBgeBbAFQAkACAqAOQA4ATAgAhQAfAeAUA2QAbBIgOBNInTC/IgbA6QgBgegKgfg'
      )
    this.shape_18.setTransform(54.2958, 27.5824)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol15,
    new cjs.Rectangle(0, 0, 132.3, 133.8),
    null
  )
  ;(lib.Symbol14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .lf(['#C47A00', '#EDA300'], [0, 1], 1.6, 6.5, -1.6, -5.6)
      .s()
      .p(
        'AhrA5IgehpQAMAAA2gKIACAJQAHAeAPATQAMAQANAFQASgTAYgJQAigQAdALQAeALAPAWQALATgBASg'
      )
    this.shape.setTransform(16.6542, 16.4)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .lf(['#C47A00', '#EDA300'], [0, 1], -1.2, -4.5, 1.2, 4.6)
      .s()
      .p('AgugkQgCgRAYgDQAMgBAMACIAZAOIAWBZQg1AKgMAAQgahCgCgcg')
    this.shape_1.setTransform(4.7205, 5.7429)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol14,
    new cjs.Rectangle(0, 0, 30.5, 22.3),
    null
  )
  ;(lib.Symbol13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .lf(['#BE7400', '#F2A800'], [0, 1], 0, 11.5, 0, -11.7)
      .s()
      .p('Ah8B2IBAjrQAjALA9AKIg9CTQAFgJAXgLQAggOAcAGQAYAGAUAkQANAaAFAbg')
    this.shape.setTransform(12.5, 11.8)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol13,
    new cjs.Rectangle(0, 0, 25, 23.6),
    null
  )
  ;(lib.Symbol12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#433D18')
      .s()
      .p(
        'AgVA3QgRgGgFgVQgGgVAJgWQAJgXATgMQARgLARAHQAQAGAGAVQAGAVgJAWQgJAWgSANQgMAHgKAAQgGAAgHgDg'
      )
    this.shape.setTransform(4.65, 8.8)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#433D18')
      .s()
      .p(
        'AAEAqQgNgKgLgTQgMgTgCgRQgCgRAIgFQAWgNAaAuQAMAUADAPQACARgLAHQgCACgEAAQgGAAgKgHg'
      )
    this.shape_1.setTransform(68.6126, 4.8748)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12,
    new cjs.Rectangle(0, 0, 72.2, 14.6),
    null
  )
  ;(lib.Symbol11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#B8CACB')
      .s()
      .p(
        'AhfBLQgkgPgzgfQgzgdgWgUQgRgOgNgbQgKgWgEgSQASArA4AqQAqAeArASQCRA/BRgBQA7AEAvgTQAjgNAQgUQAggmAZiAIgMBUQgGAXgMAcQgOAjgNAUQgNAUglAOQgfANgkAEQh1AAhogug'
      )
    this.shape.setTransform(31.325, 39.625)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#DCEEF0')
      .s()
      .p(
        'AAiDvQhFgJgygSQgwgPg/gtQhFgxgWgqQgUgnABgkQAAgSAIgfQAJggAeguQAhg1AsgsIAGgHQAfAcAgAZQAqAfAOADQASgPASgTQAXgXAGgMQAOAKAeANQApARAzAMQAiAMAhAOQArASAOAKQhIgbg0gPQhcgcgbgOIhCBIQglgXghgXQgtgfgJgOIhZBuQACA7AjBBQAuBYBXAxQAzAdA/AQQBaAWBIgWQAogJAfgVQAMgPALgdQAQgtAGg6QgCAqgPA6QgTBFgXAVQgdAZgdAIQgKADgsAFIgLAAQgoAAg0gHg'
      )
    this.shape_1.setTransform(30.7494, 24.5806)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FFFFFF')
      .s()
      .p(
        'AAWD2QhMgXhKgiQhkgvgkguQgVgggLgiQgOgrAHglQAEghAbgwQAkhBA8g4QAeAeAgAZQAqAiARAAIA8hJQCsBNA+ANQAsAKAQA6QANAugIBCQgEAqgQAwQgUA+gcAfQgYAYg2AIQgZAEgcAAQgmAAgtgHg'
      )
    this.shape_2.setTransform(30.7955, 25.6134)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [{ t: this.shape_2 }, { t: this.shape_1 }, { t: this.shape }],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol11,
    new cjs.Rectangle(0, 0, 61.5, 51.7),
    null
  )
  ;(lib.Symbol10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#FFE969')
      .s()
      .p(
        'AgdAXQgGgJAEgMQAFgLAMgKQAMgJAMgBQANgBAGAIQAHAIgFANQgEALgMAKQgMAJgMABIgDAAQgLAAgGgHg'
      )
    this.shape.setTransform(90.662, 47.4041)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .rf(['#FFC800', '#FE9D00'], [0, 1], -1, -2.8, 0, -1, -2.8, 14.2)
      .s()
      .p(
        'AiLBkQgNgJgHgQQgKgWAIgXQAHgOANgIQARgKAUAJIACgCQAMgKAKgpQALgiAigTQAsgbBAAUQAhAMAaAZQAjAigCAoQAAAqgTAuQgEgOgNgLQgSgOgYgBQgRABgdALQgoAOgnAaQgXAJgZABIgFAAQgfAAgRgPg'
      )
    this.shape_1.setTransform(92.1078, 54.7178)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#FF5251')
      .s()
      .p(
        'AgqBWQgRgGgNgTQgXgmAWgnQARgdAggTQAYADAggJQAXgGATgKQAPAUgHAMQgFAJgOACIgSAEQgJAEgJAIQgLAMgJAlIgKAsQgMAVgRAAIgKgBg'
      )
    this.shape_2.setTransform(84.0026, 70.7471)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .lf(['#FFB800', '#FDA000'], [0, 1], 0, 7.8, 0, -7.7)
      .s()
      .p(
        'AARBOQglgIgkggQgxgrgRhIIAvAAQASAnArAaQA7AiBOgOQgHAZgWAUQgcAZgrAAIgGAAg'
      )
    this.shape_3.setTransform(89.8, 70.232)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#2B2B2B')
      .s()
      .p('AhZAgQgLgHAFgqIBihCIBfAUQgqARgLAMQgQAVAKAiQAFAUASAgIgfALQhpgrgPgJg')
    this.shape_4.setTransform(94.4847, 66.25)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#FFEF9B')
      .s()
      .p(
        'Ah5B2Qgvg2ABhLQAAhFA1gsQA4guBfABQA1ABAnAtQAnAuAABCQAABBguA2QgsA1g6AHQgOACgMAAQhGAAgtg0g'
      )
    this.shape_5.setTransform(56.8, 44.2889)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#F3D872')
      .s()
      .p(
        'AiICRQgxg4AAhbQAAhWBHg+QBKhABeALQBAAAAjA0QAhAyAABWQAABYgoA9QgsBChLAGIgGAAQhmAAg3g9g'
      )
    this.shape_6.setTransform(54.975, 48.1405)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#FF8989')
      .s()
      .p(
        'AieB1QgbgmAShjQA6haApgaQA0ghBaALIA1gBQAVAAAJAHQASAMAABNQgHBag1A/Qg3BChRAGQhrgFgegog'
      )
    this.shape_7.setTransform(55.969, 55.4264)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#000000')
      .s()
      .p(
        'AiQCRQgrgNABhIQgBhSBAg9QBDhBBlACQBGAFAmA5QAjA0AABSQgBBFhFAPQgWAFhtAAQhDAIgjAAQgUAAgJgCg'
      )
    this.shape_8.setTransform(54.85, 40.1842)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#FFEF9B')
      .s()
      .p(
        'AgIB0Qg5gfgQgkQgeg/ABgwQABg0AlgRQAlgRAuAeQAuAfAdA8QAbA4gDAwQgCArgWAMQgMAGgOAAQgdAAgngWg'
      )
    this.shape_9.setTransform(108.7592, 39.9588)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics
      .f('#F3D872')
      .s()
      .p(
        'AgTCRQg0gggfhAQgehBAIg7QAJg9AqgUQArgUAzAgQAzAfAfBCQAeBAgIA8QgIA8grAUQgQAIgSAAQgcAAgfgUg'
      )
    this.shape_10.setTransform(107.3405, 42.5)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics
      .f('#000000')
      .s()
      .p(
        'AgVCSQg1gfgfhBQgehAAJg9QAJg8AsgVQAsgUA0AfQA0AfAfBBQAfBAgKA9QgJA8gsAVQgRAIgTAAQgdAAgegTg'
      )
    this.shape_11.setTransform(106.9353, 40.3909)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics
      .f('#FF8989')
      .s()
      .p(
        'AgNBiQgogZgRgtQgTgtAIgpQAHgoAdgMQAdgLAgAZQAhAYASAuQATAwgCAlQgDAogcALQgJAEgLAAQgVAAgZgQg'
      )
    this.shape_12.setTransform(112.056, 48.5158)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#D7EBED')
      .s()
      .p(
        'AirDNQgWgcAHgrQARgnAlhHQArhWAihIQAjhMAngRQAegOAVAUQAhAcAeAgQAoArAMAbQALAbgYA8QgSArgdAvQghAxhDAsQgzAigvARQgTAEgPAAQgsAAgUgdg'
      )
    this.shape_13.setTransform(84.1253, 66.2499)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#D7EBED')
      .s()
      .p(
        'AhAA0QgHgLgFgQQgGgUACgPQAcACAhgNQAqgRAagmQASADAJAPQANAUgOAgQgKAQgPACQgVADgVgcQAHAtgOAYQgLARgQAEIgGAAQgSAAgOgZg'
      )
    this.shape_14.setTransform(99.1463, 100.1492)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#C9D4D5')
      .s()
      .p(
        'AgTFdQhmgJhcghQh8gugbhGIhYlSQAFg9ANg8QAShOAUgRQgSBsACB4QADCcAtA9QA6BRBsA8QBeA0B1AcQBfAYChgFQCKgEAugPQgVAShYAUQhkAXhlAAQhRAAhRgPg'
      )
    this.shape_15.setTransform(45.65, 97.3355)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics
      .lf(['#FDFEFE', '#E4F3F6'], [0, 1], 19.9, 53.5, -12.6, -43.9)
      .s()
      .p(
        'AlKIgQjTgvhHi8Qg1iMAhiYQADgoARg1QAMgmAPgfIAjAVQgFgjAIgaQAFgUAKgIQAZgaAjgJQAagHAVADQgYBKAuAoQAhAeA1ADIAmh7IAAhZQgghiAig9QAYgqAwgPQBPgXBSAWQA0APBBAmQAcgJA5ADQA/ADAaAQQAVg/AwgcQAkgVAjAEQAkADANAhQAKAYgEAdIAJATIAAA2QAmArAfBtQAYBSALBPQBHBXgIBlQgCAcgJAiQgHAYACABQAmASAGAnQACAUgQANQgNAJgRACQAcAXABAdQAAAWgMAQQgTAUghgJQgYgHgVgSQgTAlg1AnQgnAcgnASQiYBgjoAIIgsABQiUAAh+gig'
      )
    this.shape_16.setTransform(64.5833, 75.5098)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics
      .lf(['#A8BBBE', '#9DAFB1'], [0, 1], -0.1, 11.3, 2.2, -8.1)
      .s()
      .p('AgRB8QAOhYgVhTQgPg+gZgkQA3ALAkAuQAhApAEAtQACAmgSAwQgOAkgRAag')
    this.shape_17.setTransform(125.8058, 80.425)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics
      .lf(['#FF2B2B', '#CF1818'], [0, 1], 13.7, 21, -10.2, -21.4)
      .s()
      .p(
        'AjFDXQgOgqgZgVIgCgBQgqgjgOgOQgVgVAEgNQAFgQAXgMQAbgPAogCQAIgDABgHQABgIgQgIQgVgKgLgOQgOgUAQgQQALgQAVgMQAcgPAhAFQBFALAZgCQAQgCAHgHQAIgKgRgQQg3gugNgSQgOgeA3gcQBBgeBbAFQAkACAqAOQA4ATAgAhQAfAeAUA2QAbBIgOBNInTC/IgbA6QgBgegKgfg'
      )
    this.shape_18.setTransform(54.2958, 27.5824)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10,
    new cjs.Rectangle(0, 0, 132.3, 133.8),
    null
  )
  ;(lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .lf(['#C47A00', '#EDA300'], [0, 1], 1.6, 6.5, -1.6, -5.6)
      .s()
      .p(
        'AhrA5IgehpQAMAAA2gKIACAJQAHAeAPATQAMAQANAFQASgTAYgJQAigQAdALQAeALAPAWQALATgBASg'
      )
    this.shape.setTransform(16.6542, 16.4)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .lf(['#C47A00', '#EDA300'], [0, 1], -1.2, -4.5, 1.2, 4.6)
      .s()
      .p('AgugkQgCgRAYgDQAMgBAMACIAZAOIAWBZQg1AKgMAAQgahCgCgcg')
    this.shape_1.setTransform(4.7205, 5.7429)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9,
    new cjs.Rectangle(0, 0, 30.5, 22.3),
    null
  )
  ;(lib.Symbol8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.shape = new cjs.Shape()
    this.shape.graphics
      .lf(['#BE7400', '#F2A800'], [0, 1], 0, 11.5, 0, -11.7)
      .s()
      .p('Ah8B2IBAjrQAjALA9AKIg9CTQAFgJAXgLQAggOAcAGQAYAGAUAkQANAaAFAbg')
    this.shape.setTransform(12.5, 11.8)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8,
    new cjs.Rectangle(0, 0, 25, 23.6),
    null
  )
  ;(lib.Symbol5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Blue()
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol5,
    new cjs.Rectangle(0, 0, 144, 144),
    null
  )
  ;(lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Yellow()
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol4,
    new cjs.Rectangle(0, 0, 144, 144),
    null
  )
  ;(lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Group9()
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol2,
    new cjs.Rectangle(0, 0, 302, 330),
    null
  )
  ;(lib.ClipGroup = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_2 (mask)
    var mask = new cjs.Shape()
    mask._off = true
    mask.graphics.p('EhdjBdkMAAAi7HMC7HAAAMAAAC7Hg')
    mask.setTransform(611.475, 622.875)
    // Layer_3
    this.shape = new cjs.Shape()
    this.shape.graphics.f('#ED1EE2').s().p('AgsAAIAUglIBFAlIgUAmg')
    this.shape.setTransform(1067.45, 1049.775)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#482D91')
      .s()
      .p('AhWBVQA1gYAXhCQAZhMghhQQA6AXAuAvQAFBhg2BKQgvBDhGAQQAIgqgOgkg')
    this.shape_1.setTransform(1196.8675, 1160.65)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics.f('#482D91').s().p('AhegkIC1gRIAIBaIi1AQg')
    this.shape_2.setTransform(982.25, 1211.9)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics.f('#FCCD21').s().p('AhxAsICSigIBRBJIiSCgg')
    this.shape_3.setTransform(1163.2, 1044.525)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#C1277C')
      .s()
      .p('AgUAqQg2gggVg5IAngRQAUAnAnATQAnARAqgLIAMA/QgPACgPAAQguAAgogXg')
    this.shape_4.setTransform(1126.45, 1012.5313)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#029200')
      .s()
      .p('AgCAIQgogUgsAKIgKhDQBBgHA2AjQA3AkATA8IgqAQQgSgqgngVg')
    this.shape_5.setTransform(1022.725, 1228.2096)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics.f('#00BCA2').s().p('AglAWIAohBIAjAWIgoBBg')
    this.shape_6.setTransform(1087.875, 1158.3)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics.f('#ED1EE2').s().p('AgzhFIBRgMIAWCXIhRAMg')
    this.shape_7.setTransform(715.55, 1047.225)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#482D91')
      .s()
      .p('AgpAtQAbgPAJgiQAJgngUgpQAfAJAZAYQAHAygZAnQgWAkgjALQADgWgJgSg')
    this.shape_8.setTransform(982.6682, 1178.3)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics.f('#FB8A3B').s().p('Ai+g+IF9gBIAAB+Il8ABg')
    this.shape_9.setTransform(908.85, 1216.425)
    this.shape_10 = new cjs.Shape()
    this.shape_10.graphics.f('#FCCD21').s().p('Ah3g6IBehIICRC8IhfBJg')
    this.shape_10.setTransform(939.825, 1214.75)
    this.shape_11 = new cjs.Shape()
    this.shape_11.graphics.f('#FCCD21').s().p('AiUA6IC/jTIBqBgIi/DTg')
    this.shape_11.setTransform(905.7, 1127.925)
    this.shape_12 = new cjs.Shape()
    this.shape_12.graphics.f('#029200').s().p('AhkgMIAzhMICWBlIgzBMg')
    this.shape_12.setTransform(875.325, 1088.6)
    this.shape_13 = new cjs.Shape()
    this.shape_13.graphics
      .f('#C1277C')
      .s()
      .p('AgJAKQAGgEADgGQABgGgBgGIAJgDQACAKgEAIQgFAJgIAEg')
    this.shape_13.setTransform(788.5696, 1034.925)
    this.shape_14 = new cjs.Shape()
    this.shape_14.graphics
      .f('#029200')
      .s()
      .p('AgEAKQgNgHgFgOIAJgEQAFAKAJAEQAJAEAKgDIADAPIgHABQgLAAgJgGg')
    this.shape_14.setTransform(767.7, 1219.0313)
    this.shape_15 = new cjs.Shape()
    this.shape_15.graphics
      .f('#00BCA2')
      .s()
      .p('AgBAEQgOgJgQABIAAgZQAZABARAQQASAPADAYIgQADQgEgQgNgKg')
    this.shape_15.setTransform(900.975, 1087.725)
    this.shape_16 = new cjs.Shape()
    this.shape_16.graphics.f('#00BCA2').s().p('AhqgyIDQgKIAGBvIjRAKg')
    this.shape_16.setTransform(820.55, 1215.175)
    this.shape_17 = new cjs.Shape()
    this.shape_17.graphics.f('#ED1EE2').s().p('AhbhdIB4giIA/DdIh4Aig')
    this.shape_17.setTransform(474.875, 1046.6)
    this.shape_18 = new cjs.Shape()
    this.shape_18.graphics.f('#C1277C').s().p('Ag3hAIBOgRIAhCSIhPARg')
    this.shape_18.setTransform(702.325, 1202.325)
    this.shape_19 = new cjs.Shape()
    this.shape_19.graphics
      .f('#ED1EE2')
      .s()
      .p('AiRA5QAfh0BbhCQBSg9BXAIQgZAtACAxQhHAJg0BFQg6BOAKBsQg+gygjhJg')
    this.shape_19.setTransform(745.125, 1216.448)
    this.shape_20 = new cjs.Shape()
    this.shape_20.graphics
      .f('#482D91')
      .s()
      .p('Ah+gNQA4g+BLgNQBGgLA0AgQgeAUgOAeQgugQg1AaQg9AdgbBGQgWgyAAg3g')
    this.shape_20.setTransform(706.4244, 1149.8747)
    this.shape_21 = new cjs.Shape()
    this.shape_21.graphics.f('#FB8A3B').s().p('AighqIBghLIDhEgIhgBLg')
    this.shape_21.setTransform(655.775, 1126.85)
    this.shape_22 = new cjs.Shape()
    this.shape_22.graphics.f('#FCCD21').s().p('AhTgZIA2g4IBxBrIg2A4g')
    this.shape_22.setTransform(597.275, 1214.6)
    this.shape_23 = new cjs.Shape()
    this.shape_23.graphics.f('#FCCD21').s().p('AipAAIBEiIIEPCJIhECIg')
    this.shape_23.setTransform(614.275, 1138.5)
    this.shape_24 = new cjs.Shape()
    this.shape_24.graphics.f('#029200').s().p('AgWgIIAsgEIACAVIgsAEg')
    this.shape_24.setTransform(697.3, 1100.475)
    this.shape_25 = new cjs.Shape()
    this.shape_25.graphics
      .f('#C1277C')
      .s()
      .p('AgqArQAbgQALgbQAKgdgJgcIArgMQAKAsgUAmQgUAngnASg')
    this.shape_25.setTransform(602.7667, 1061.575)
    this.shape_26 = new cjs.Shape()
    this.shape_26.graphics
      .f('#00BCA2')
      .s()
      .p('AhwDSQBMhXAEhyQAEhyhFhZICMhfQBYCNgWCkQgVCkh4Bug')
    this.shape_26.setTransform(660.294, 1047.55)
    this.shape_27 = new cjs.Shape()
    this.shape_27.graphics.f('#00BCA2').s().p('AhDBNIApiwIBfAXIgrCwg')
    this.shape_27.setTransform(517.4, 1185.225)
    this.shape_28 = new cjs.Shape()
    this.shape_28.graphics.f('#ED1EE2').s().p('AgWAEIAHgUIAlANIgGAUg')
    this.shape_28.setTransform(218.65, 1054.275)
    this.shape_29 = new cjs.Shape()
    this.shape_29.graphics
      .f('#482D91')
      .s()
      .p('AAGBuQAdg8gbhLQgfhWhZgvQBGgXBKAKQBLBTAGBoQAFBfgzBAQgXgrgmgWg')
    this.shape_29.setTransform(537.7268, 1190.134)
    this.shape_30 = new cjs.Shape()
    this.shape_30.graphics.f('#FB8A3B').s().p('AjrgMIA3iLIGgCkIg3CLg')
    this.shape_30.setTransform(425.125, 1209.5)
    this.shape_31 = new cjs.Shape()
    this.shape_31.graphics.f('#FCCD21').s().p('AhZgCICShDIAhBIIiSBDg')
    this.shape_31.setTransform(401.425, 1187.975)
    this.shape_32 = new cjs.Shape()
    this.shape_32.graphics.f('#FCCD21').s().p('Ahph6ICMgjIBHEXIiLAkg')
    this.shape_32.setTransform(336.9, 1139.675)
    this.shape_33 = new cjs.Shape()
    this.shape_33.graphics.f('#029200').s().p('AgxAPIBDg+IAfAhIhCA+g')
    this.shape_33.setTransform(388.75, 1097.5)
    this.shape_34 = new cjs.Shape()
    this.shape_34.graphics
      .f('#C1277C')
      .s()
      .p('AgyAGQgKhCAig5IAoAWQgTArAKAtQALAsAmAbIgsA2QgygugKhCg')
    this.shape_34.setTransform(311.8364, 995.075)
    this.shape_35 = new cjs.Shape()
    this.shape_35.graphics
      .f('#029200')
      .s()
      .p('AgpADQAQgRAYgDQAXgEAUAMIgIAOQgQgGgQADQgOAEgKANg')
    this.shape_35.setTransform(341.85, 1199.1015)
    this.shape_36 = new cjs.Shape()
    this.shape_36.graphics
      .f('#00BCA2')
      .s()
      .p('Ag0gEQAHhSA4g5IAqAlQgkAuAAA4QABA3AkArIhDAyQguhEAHhQg')
    this.shape_36.setTransform(503.6792, 1025.6)
    this.shape_37 = new cjs.Shape()
    this.shape_37.graphics.f('#00BCA2').s().p('AhMA+IBFifIBUAlIhFCfg')
    this.shape_37.setTransform(306.8, 1186.6)
    this.shape_38 = new cjs.Shape()
    this.shape_38.graphics.f('#C1277C').s().p('AhlgNICohAIAjBbIioBAg')
    this.shape_38.setTransform(271.275, 1199.575)
    this.shape_39 = new cjs.Shape()
    this.shape_39.graphics
      .f('#482D91')
      .s()
      .p('AgzBqQAugxgEhPQgFhbhHhHQBIgBBFAfQAuBlgYBkQgXBchCAvQgJgwgfggg')
    this.shape_39.setTransform(238.0227, 1134.5984)
    this.shape_40 = new cjs.Shape()
    this.shape_40.graphics.f('#FB8A3B').s().p('AjDgnIF4guIAPB9Il4Aug')
    this.shape_40.setTransform(194.325, 1135.125)
    this.shape_41 = new cjs.Shape()
    this.shape_41.graphics.f('#FCCD21').s().p('AhvgZIBChPICdCCIhBBPg')
    this.shape_41.setTransform(118.525, 1061.675)
    this.shape_42 = new cjs.Shape()
    this.shape_42.graphics.f('#029200').s().p('Ai9AEIEsieIBQCWIktCfg')
    this.shape_42.setTransform(233.75, 1088.85)
    this.shape_43 = new cjs.Shape()
    this.shape_43.graphics
      .f('#C1277C')
      .s()
      .p('AhfAtQAzgKAhgnQAfgngBgzIBNAEQgHBKg1A0QgyA1hKAGg')
    this.shape_43.setTransform(43.15, 1084.075)
    this.shape_44 = new cjs.Shape()
    this.shape_44.graphics
      .f('#029200')
      .s()
      .p('AglAJQgOguASgsIAgAMQgKAgAMAfQANAeAeAPIgaArQgogbgPgug')
    this.shape_44.setTransform(74.3564, 1192.05)
    this.shape_45 = new cjs.Shape()
    this.shape_45.graphics
      .f('#00BCA2')
      .s()
      .p('AhhB2QA/gsAVhKQAThJgehEIBqgpQAjBqgoBnQgnBmhfA2g')
    this.shape_45.setTransform(197.3222, 997.4)
    this.shape_46 = new cjs.Shape()
    this.shape_46.graphics.f('#00BCA2').s().p('AjwALIFtjZIB0DEIltDZg')
    this.shape_46.setTransform(94.175, 1215.925)
    this.shape_47 = new cjs.Shape()
    this.shape_47.graphics.f('#ED1EE2').s().p('AgogFIAYggIA5ArIgYAgg')
    this.shape_47.setTransform(1071.675, 807.3)
    this.shape_48 = new cjs.Shape()
    this.shape_48.graphics
      .f('#ED1EE2')
      .s()
      .p('AgyA1QgCg4AggrQAcgnApgJQgGAYAIAWQgfAOgOAlQgPAsATAwQgigPgagbg')
    this.shape_48.setTransform(1179.6191, 947.75)
    this.shape_49 = new cjs.Shape()
    this.shape_49.graphics.f('#FB8A3B').s().p('AhFgZIBpgnIAiBaIhoAng')
    this.shape_49.setTransform(1103.15, 1101.55)
    this.shape_50 = new cjs.Shape()
    this.shape_50.graphics.f('#FB8A3B').s().p('AgLAfIADg+IAUABIgDA+g')
    this.shape_50.setTransform(1119.825, 885.05)
    this.shape_51 = new cjs.Shape()
    this.shape_51.graphics.f('#482D91').s().p('AgphSIBSAAIABClIhSAAg')
    this.shape_51.setTransform(1014.225, 982.575)
    this.shape_52 = new cjs.Shape()
    this.shape_52.graphics.f('#FCCD21').s().p('AiVACIDth6IA+B2IjuB7g')
    this.shape_52.setTransform(1191.95, 1051.45)
    this.shape_53 = new cjs.Shape()
    this.shape_53.graphics.f('#FCCD21').s().p('AgSAYIALg2IAaAGIgLA2g')
    this.shape_53.setTransform(1078.15, 854.75)
    this.shape_54 = new cjs.Shape()
    this.shape_54.graphics.f('#029200').s().p('AhkgbIA/hFICKB8Ig/BFg')
    this.shape_54.setTransform(1203.475, 870.375)
    this.shape_55 = new cjs.Shape()
    this.shape_55.graphics
      .f('#C1277C')
      .s()
      .p('Ag4AGQgKhKAng/IAsAZQgWAwALAzQAMAxApAfIgyA7Qg2gzgLhLg')
    this.shape_55.setTransform(1082.9386, 817.95)
    this.shape_56 = new cjs.Shape()
    this.shape_56.graphics
      .f('#029200')
      .s()
      .p('AgDAwQhHgFgzgvIAgglQAnAeAygCQAwgBAkghIAuA5Qg1Amg/AAIgNAAg')
    this.shape_56.setTransform(1091.675, 922.8968)
    this.shape_57 = new cjs.Shape()
    this.shape_57.graphics
      .f('#00BCA2')
      .s()
      .p('Ah8C3QBThIAShsQAShpg2hcICPhKQBCCQgpCXQgoCYh+Bag')
    this.shape_57.setTransform(1187.5237, 757)
    this.shape_58 = new cjs.Shape()
    this.shape_58.graphics.f('#00BCA2').s().p('AhPABIB6hDIAlBCIh6BEg')
    this.shape_58.setTransform(1011.5, 954.05)
    this.shape_59 = new cjs.Shape()
    this.shape_59.graphics.f('#ED1EE2').s().p('Ag4gRIAogoIBJBLIgoAog')
    this.shape_59.setTransform(724.9, 786.875)
    this.shape_60 = new cjs.Shape()
    this.shape_60.graphics
      .f('#ED1EE2')
      .s()
      .p('AgDAGQgkgJgkASQAIgbAVgXQAtgGAjAWQAhAUAJAfQgUgCgPAIQgOgYgegIg')
    this.shape_60.setTransform(920.125, 1049.745)
    this.shape_61 = new cjs.Shape()
    this.shape_61.graphics
      .f('#482D91')
      .s()
      .p('Ag2AzQABg6AigqQAegnAqgHQgGAYAHAWQggAOgQAmQgQAsAQAxQgggPgcgeg')
    this.shape_61.setTransform(1030.4, 903.175)
    this.shape_62 = new cjs.Shape()
    this.shape_62.graphics.f('#FB8A3B').s().p('AgbgKIAqgPIANAkIgqAPg')
    this.shape_62.setTransform(844.325, 1011.425)
    this.shape_63 = new cjs.Shape()
    this.shape_63.graphics.f('#FB8A3B').s().p('AiRgIIELhIIAYBZIkLBIg')
    this.shape_63.setTransform(890.875, 912.625)
    this.shape_64 = new cjs.Shape()
    this.shape_64.graphics.f('#FCCD21').s().p('AhOAmIABhNICcABIgBBOg')
    this.shape_64.setTransform(847.825, 994.75)
    this.shape_65 = new cjs.Shape()
    this.shape_65.graphics.f('#FCCD21').s().p('AhLAJIAYg/IB+AuIgWA/g')
    this.shape_65.setTransform(898.4, 828.525)
    this.shape_66 = new cjs.Shape()
    this.shape_66.graphics.f('#029200').s().p('AgRgbIAdgEIAGA7IgcADg')
    this.shape_66.setTransform(986.475, 906.15)
    this.shape_67 = new cjs.Shape()
    this.shape_67.graphics
      .f('#C1277C')
      .s()
      .p('AhJBAQAtgWAVgsQAUgtgNgvIBIgPQALBIgkA9QgjA9hCAZg')
    this.shape_67.setTransform(845.5392, 786.675)
    this.shape_68 = new cjs.Shape()
    this.shape_68.graphics
      .f('#029200')
      .s()
      .p('Ag7ARIALgUQAWAIAXgGQAWgHANgTIAcAVQgWAagiAHQgJABgJAAQgXAAgWgLg')
    this.shape_68.setTransform(877.2, 1029.1418)
    this.shape_69 = new cjs.Shape()
    this.shape_69.graphics
      .f('#00BCA2')
      .s()
      .p('Ai1CbQBug1AzhsQAyhtgehyICvgkQAbCuhYCVQhYCWiiA6g')
    this.shape_69.setTransform(1005.601, 819.925)
    this.shape_70 = new cjs.Shape()
    this.shape_70.graphics.f('#00BCA2').s().p('Ai+CTICvmCIDOBeIivGBg')
    this.shape_70.setTransform(862.725, 852.1)
    this.shape_71 = new cjs.Shape()
    this.shape_71.graphics.f('#ED1EE2').s().p('Ag4AJIATgzIBeAjIgTAyg')
    this.shape_71.setTransform(530.6, 853.85)
    this.shape_72 = new cjs.Shape()
    this.shape_72.graphics.f('#C1277C').s().p('AgtAWIACgvIBYAEIgBAvg')
    this.shape_72.setTransform(752.9, 988.925)
    this.shape_73 = new cjs.Shape()
    this.shape_73.graphics
      .f('#ED1EE2')
      .s()
      .p('AgHAJQgngDgjAaQAEgfARgbQAvgOAoAQQAnAPAQAfQgUAAgRAMQgSgWgigDg')
    this.shape_73.setTransform(710.875, 1036.5233)
    this.shape_74 = new cjs.Shape()
    this.shape_74.graphics
      .f('#482D91')
      .s()
      .p('AhtBUQBAgOAqhEQAuhKgShiQA8AoAmBAQgTBshNBDQhFA+hQAAQATgrgGgsg')
    this.shape_74.setTransform(760.025, 901.75)
    this.shape_75 = new cjs.Shape()
    this.shape_75.graphics.f('#FB8A3B').s().p('Ag6ASIAyhOIBDArIgyBOg')
    this.shape_75.setTransform(649.825, 1078.075)
    this.shape_76 = new cjs.Shape()
    this.shape_76.graphics.f('#FB8A3B').s().p('AjoAKIGdidIA0CKImcCdg')
    this.shape_76.setTransform(700.4, 962.85)
    this.shape_77 = new cjs.Shape()
    this.shape_77.graphics.f('#482D91').s().p('AiqgsIBoh3IDtDQIhoB3g')
    this.shape_77.setTransform(538.575, 925.675)
    this.shape_78 = new cjs.Shape()
    this.shape_78.graphics.f('#FCCD21').s().p('Ah1AkIAShsIDZAmIgTBrg')
    this.shape_78.setTransform(693.95, 986.025)
    this.shape_79 = new cjs.Shape()
    this.shape_79.graphics.f('#FCCD21').s().p('Ag6ByIADjkIByABIgDDkg')
    this.shape_79.setTransform(557.475, 815.225)
    this.shape_80 = new cjs.Shape()
    this.shape_80.graphics.f('#029200').s().p('AgvBVIAJiuIBWAEIgICvg')
    this.shape_80.setTransform(614.05, 887.275)
    this.shape_81 = new cjs.Shape()
    this.shape_81.graphics
      .f('#C1277C')
      .s()
      .p('AAZBLQgCglgYgcQgYgagkgFIALg2QAzANAgArQAfAqgDA1g')
    this.shape_81.setTransform(555.263, 784.925)
    this.shape_82 = new cjs.Shape()
    this.shape_82.graphics
      .f('#029200')
      .s()
      .p('AgXgDQAGgkAbgWIAQASQgRASgCAZQgDAXAOAUIgeATQgSgfAHgig')
    this.shape_82.setTransform(592.187, 990.775)
    this.shape_83 = new cjs.Shape()
    this.shape_83.graphics
      .f('#00BCA2')
      .s()
      .p('AgGATQhggwhoAZIgbifQCcgUCEBUQCDBTAwCSIhlAmQgshkhfgxg')
    this.shape_83.setTransform(716.925, 737.6154)
    this.shape_84 = new cjs.Shape()
    this.shape_84.graphics.f('#00BCA2').s().p('Ah9AQIAqhvIDSBQIgsBvg')
    this.shape_84.setTransform(528.6, 856.775)
    this.shape_85 = new cjs.Shape()
    this.shape_85.graphics.f('#ED1EE2').s().p('AiCg8IBvhSICWDLIhvBSg')
    this.shape_85.setTransform(287.625, 863.95)
    this.shape_86 = new cjs.Shape()
    this.shape_86.graphics
      .f('#ED1EE2')
      .s()
      .p('AgEAKQhEgYhKAcQAVg0AtgpQBYgCBCAyQA8AsANBAQgkgJgjAMQgVgwg7gWg')
    this.shape_86.setTransform(473.625, 1066.6712)
    this.shape_87 = new cjs.Shape()
    this.shape_87.graphics
      .f('#482D91')
      .s()
      .p('AiUA0QAjhzBchAQBTg6BXALQgbAtACAvQhIAHg1BEQg9BMAHBsQg8gzghhKg')
    this.shape_87.setTransform(454.775, 912.438)
    this.shape_88 = new cjs.Shape()
    this.shape_88.graphics.f('#FB8A3B').s().p('AgtgVIBJgUIASA/IhJAUg')
    this.shape_88.setTransform(322.175, 1079.775)
    this.shape_89 = new cjs.Shape()
    this.shape_89.graphics.f('#FB8A3B').s().p('AhoCSIBmlFIBrAiIhmFFg')
    this.shape_89.setTransform(459.95, 966.05)
    this.shape_90 = new cjs.Shape()
    this.shape_90.graphics.f('#FCCD21').s().p('AgpgsIAzgQIAgBpIgzAQg')
    this.shape_90.setTransform(445.825, 980.25)
    this.shape_91 = new cjs.Shape()
    this.shape_91.graphics.f('#FCCD21').s().p('AgVgCIAlgNIAGATIglAMg')
    this.shape_91.setTransform(380.725, 837.825)
    this.shape_92 = new cjs.Shape()
    this.shape_92.graphics.f('#029200').s().p('AhiALIAfhTICmA+IgfBSg')
    this.shape_92.setTransform(446.875, 864.5)
    this.shape_93 = new cjs.Shape()
    this.shape_93.graphics
      .f('#C1277C')
      .s()
      .p('AgwgDQAGhLAyg1IAmAiQggAqABAzQABAzAiAmIg9AvQgrg+AGhJg')
    this.shape_93.setTransform(320.3188, 832.075)
    this.shape_94 = new cjs.Shape()
    this.shape_94.graphics
      .f('#029200')
      .s()
      .p('AgIAjQgxgMgegoIAcgWQAYAaAjAGQAiAFAdgSIAZAuQgeAOgfAAQgSAAgRgFg')
    this.shape_94.setTransform(279.175, 945.6048)
    this.shape_95 = new cjs.Shape()
    this.shape_95.graphics
      .f('#00BCA2')
      .s()
      .p('Ah4AuQAghEBFghQBEghBIAUIgKAzQg1gIgtAaQgsAbgRAxg')
    this.shape_95.setTransform(488.775, 763.1995)
    this.shape_96 = new cjs.Shape()
    this.shape_96.graphics.f('#00BCA2').s().p('AjLhMICbiIID8EhIibCIg')
    this.shape_96.setTransform(329.675, 867.925)
    this.shape_97 = new cjs.Shape()
    this.shape_97.graphics.f('#C1277C').s().p('AiDAhIAgh9IDnA9IghB8g')
    this.shape_97.setTransform(205.45, 985.975)
    this.shape_98 = new cjs.Shape()
    this.shape_98.graphics
      .f('#ED1EE2')
      .s()
      .p('AgSAfQgGgbAMgVQALgVARgHQAAAMAFAJQgNAJgEASQgEAWANAVQgRgEgOgLg')
    this.shape_98.setTransform(247.8386, 1046.725)
    this.shape_99 = new cjs.Shape()
    this.shape_99.graphics
      .f('#482D91')
      .s()
      .p('AhGBaQAugjAKhEQAKhOgyhJQA9AKA3AnQAYBeglBRQgiBMhBAdQAAgrgUggg')
    this.shape_99.setTransform(221.6933, 825.3)
    this.shape_100 = new cjs.Shape()
    this.shape_100.graphics.f('#FB8A3B').s().p('Ag2gGIA2gwIA3A9Ig2Awg')
    this.shape_100.setTransform(136.025, 1093.675)
    this.shape_101 = new cjs.Shape()
    this.shape_101.graphics.f('#FB8A3B').s().p('Ah8jVICZggIBfHLIiYAgg')
    this.shape_101.setTransform(141.55, 867.6)
    this.shape_102 = new cjs.Shape()
    this.shape_102.graphics.f('#482D91').s().p('AhYhCIBYgtIBZCyIhZAtg')
    this.shape_102.setTransform(8.925, 950.575)
    this.shape_103 = new cjs.Shape()
    this.shape_103.graphics.f('#FCCD21').s().p('AiPATIAqh7ID1BXIgrB5g')
    this.shape_103.setTransform(184.9, 962.4)
    this.shape_104 = new cjs.Shape()
    this.shape_104.graphics.f('#FCCD21').s().p('AgngXIAjgWIAsBFIgjAWg')
    this.shape_104.setTransform(46.2, 816.375)
    this.shape_105 = new cjs.Shape()
    this.shape_105.graphics.f('#029200').s().p('AhphhIB4guIBbDxIh3Atg')
    this.shape_105.setTransform(137.6, 824.1)
    this.shape_106 = new cjs.Shape()
    this.shape_106.graphics
      .f('#C1277C')
      .s()
      .p('Ag3AaQgqhEAMhQIA4AHQgDA4AhAtQAhAsA2ANIgYBPQhMgbgrhFg')
    this.shape_106.setTransform(124.5667, 835.05)
    this.shape_107 = new cjs.Shape()
    this.shape_107.graphics
      .f('#029200')
      .s()
      .p('AgBAIQgogQgpALIgOg+QA+gMA1AfQA4AeAWA5IgoARQgTgngngRg')
    this.shape_107.setTransform(34.7, 962.2926)
    this.shape_108 = new cjs.Shape()
    this.shape_108.graphics
      .f('#00BCA2')
      .s()
      .p('AhJA6QAsgTAWgpQAUgqgKguIBGgLQAIBFglA4QglA6hAAUg')
    this.shape_108.setTransform(156.1953, 759.325)
    this.shape_109 = new cjs.Shape()
    this.shape_109.graphics.f('#00BCA2').s().p('AhAAbIAHhBIB6AMIgHBBg')
    this.shape_109.setTransform(93.05, 862.575)
    this.shape_110 = new cjs.Shape()
    this.shape_110.graphics.f('#ED1EE2').s().p('AgkgRIBHgEIACAnIhHADg')
    this.shape_110.setTransform(1072.225, 566.65)
    this.shape_111 = new cjs.Shape()
    this.shape_111.graphics
      .f('#ED1EE2')
      .s()
      .p('AgOAxQgwgEgcgfQAXgHAOgRQAcASAngIQAtgIAfgpQAFAmgKAjQgpAagsAAIgOgBg')
    this.shape_111.setTransform(1206.1945, 715.8352)
    this.shape_112 = new cjs.Shape()
    this.shape_112.graphics.f('#FB8A3B').s().p('AgqAWIAPg8IBGAQIgOA9g')
    this.shape_112.setTransform(1102.225, 842.95)
    this.shape_113 = new cjs.Shape()
    this.shape_113.graphics.f('#FB8A3B').s().p('AgmAuIAqhpIAjAPIgqBog')
    this.shape_113.setTransform(1213.75, 673.5)
    this.shape_114 = new cjs.Shape()
    this.shape_114.graphics.f('#482D91').s().p('AhDAsIBJh8IA+AlIhJB8g')
    this.shape_114.setTransform(1011.125, 652.325)
    this.shape_115 = new cjs.Shape()
    this.shape_115.graphics.f('#FCCD21').s().p('AgUgBIAJgQIAgASIgJARg')
    this.shape_115.setTransform(1142.375, 780.9)
    this.shape_116 = new cjs.Shape()
    this.shape_116.graphics.f('#FCCD21').s().p('AhOgFICDg1IAaBBIiDA0g')
    this.shape_116.setTransform(1065.975, 590.4)
    this.shape_117 = new cjs.Shape()
    this.shape_117.graphics.f('#029200').s().p('AhWhLIBfgnIBOC+IhfAng')
    this.shape_117.setTransform(1168.925, 644.05)
    this.shape_118 = new cjs.Shape()
    this.shape_118.graphics
      .f('#C1277C')
      .s()
      .p('AggABQgDgsAagkIAZASQgQAbAFAfQAFAdAXAUIghAiQgdgigDgtg')
    this.shape_118.setTransform(1071.3097, 526.375)
    this.shape_119 = new cjs.Shape()
    this.shape_119.graphics
      .f('#029200')
      .s()
      .p('AgLAEQgHgOAEgQIAMADQgCALAFAKQAFAJALAEIgHAQQgOgIgHgPg')
    this.shape_119.setTransform(1062.787, 780.325)
    this.shape_120 = new cjs.Shape()
    this.shape_120.graphics
      .f('#00BCA2')
      .s()
      .p('AABAGQgagDgWAOIgUgjQAjgRAmAIQAnAJAYAfIgWARQgSgUgcgEg')
    this.shape_120.setTransform(1157.1, 488.5611)
    this.shape_121 = new cjs.Shape()
    this.shape_121.graphics.f('#00BCA2').s().p('AhiA8IBniuIBeA4IhnCtg')
    this.shape_121.setTransform(1032.575, 696.725)
    this.shape_122 = new cjs.Shape()
    this.shape_122.graphics.f('#ED1EE2').s().p('AhPglICbgJIAEBUIibAJg')
    this.shape_122.setTransform(735.675, 638.475)
    this.shape_123 = new cjs.Shape()
    this.shape_123.graphics
      .f('#ED1EE2')
      .s()
      .p('AgyABQgMglANgeQAOAPARAEQgFAcATAaQAUAeApALQgbAQgeAEQglgagNgpg')
    this.shape_123.setTransform(965.6177, 723.95)
    this.shape_124 = new cjs.Shape()
    this.shape_124.graphics
      .f('#482D91')
      .s()
      .p('AgnBbQAmgrgFhEQgGhPhAg8QBAgCA7AZQArBXgTBXQgSBQg4AqQgJgqgbgbg')
    this.shape_124.setTransform(990.3185, 576.5636)
    this.shape_125 = new cjs.Shape()
    this.shape_125.graphics.f('#FB8A3B').s().p('AhCAjIAqhpIBbAkIgqBqg')
    this.shape_125.setTransform(843.9, 794.65)
    this.shape_126 = new cjs.Shape()
    this.shape_126.graphics.f('#FB8A3B').s().p('AhBgmIAlgfIBeBsIglAfg')
    this.shape_126.setTransform(980.675, 678.95)
    this.shape_127 = new cjs.Shape()
    this.shape_127.graphics.f('#FCCD21').s().p('AgVAkIAFhKIAlACIgEBLg')
    this.shape_127.setTransform(887.7, 739.275)
    this.shape_128 = new cjs.Shape()
    this.shape_128.graphics.f('#FCCD21').s().p('AgzAKIANgtIBaAbIgNAsg')
    this.shape_128.setTransform(894.225, 656.2)
    this.shape_129 = new cjs.Shape()
    this.shape_129.graphics.f('#029200').s().p('AisAnID1jIIBkB7Ij0DIg')
    this.shape_129.setTransform(893.65, 590.275)
    this.shape_130 = new cjs.Shape()
    this.shape_130.graphics
      .f('#C1277C')
      .s()
      .p('AgSAtQg7gcgag6IAogVQAXAoApAPQArAPApgOIATA/QgXAGgWAAQgoAAglgSg')
    this.shape_130.setTransform(860.325, 487.3762)
    this.shape_131 = new cjs.Shape()
    this.shape_131.graphics
      .f('#029200')
      .s()
      .p('AgFAMQgPgIgHgPIALgFQAGALALAEQALAEALgDIAFAQIgMABQgLAAgKgFg')
    this.shape_131.setTransform(851.25, 739.0917)
    this.shape_132 = new cjs.Shape()
    this.shape_132.graphics
      .f('#00BCA2')
      .s()
      .p('AABAFQgQgBgOAKIgPgVQAWgNAZAEQAZAEARASIgNAMQgNgMgSgBg')
    this.shape_132.setTransform(1005.675, 490.3379)
    this.shape_133 = new cjs.Shape()
    this.shape_133.graphics.f('#00BCA2').s().p('AjtAiIFUj6ICHC2IlUD7g')
    this.shape_133.setTransform(754.2, 668.35)
    this.shape_134 = new cjs.Shape()
    this.shape_134.graphics.f('#ED1EE2').s().p('AiSgJIDrhsIA6B/IjqBsg')
    this.shape_134.setTransform(501.15, 586.825)
    this.shape_135 = new cjs.Shape()
    this.shape_135.graphics.f('#C1277C').s().p('Ag+haIBogMIAVDAIhnANg')
    this.shape_135.setTransform(755.05, 654.025)
    this.shape_136 = new cjs.Shape()
    this.shape_136.graphics
      .f('#ED1EE2')
      .s()
      .p('AgWCJQg9hBgIhRQgGhMAng0QATAiAfAQQgWAxAYA7QAaBDBIAjQgrAPgtAAIgagBg')
    this.shape_136.setTransform(747.6536, 793.0942)
    this.shape_137 = new cjs.Shape()
    this.shape_137.graphics
      .f('#482D91')
      .s()
      .p('AhVA4QAKhQA2g1QAwgwA7gDQgMAgAGAhQgvAMgcAzQgfA5ARBIQgtgcgfgtg')
    this.shape_137.setTransform(751.025, 651.925)
    this.shape_138 = new cjs.Shape()
    this.shape_138.graphics.f('#FB8A3B').s().p('AhYhQICagTIAYCzIicAUg')
    this.shape_138.setTransform(552.35, 841.85)
    this.shape_139 = new cjs.Shape()
    this.shape_139.graphics.f('#FB8A3B').s().p('AiyAiIEtioIA4BlIktCng')
    this.shape_139.setTransform(617.9, 621.7)
    this.shape_140 = new cjs.Shape()
    this.shape_140.graphics.f('#482D91').s().p('AhPBXIA7jKIBkAeIg7DJg')
    this.shape_140.setTransform(470.675, 763.575)
    this.shape_141 = new cjs.Shape()
    this.shape_141.graphics.f('#FCCD21').s().p('AgWgpIApgBIADBUIgoABg')
    this.shape_141.setTransform(698.7, 742.9)
    this.shape_142 = new cjs.Shape()
    this.shape_142.graphics.f('#FCCD21').s().p('AiDAXIAihyIDlBFIgjByg')
    this.shape_142.setTransform(583.275, 590.725)
    this.shape_143 = new cjs.Shape()
    this.shape_143.graphics.f('#029200').s().p('AguAQIAFgrIBYAMIgFArg')
    this.shape_143.setTransform(647.05, 579.525)
    this.shape_144 = new cjs.Shape()
    this.shape_144.graphics
      .f('#C1277C')
      .s()
      .p('AgBAbQgpgDgdgaIATgVQAWARAcgBQAbgBAVgSIAaAgQgfAVgkAAIgGAAg')
    this.shape_144.setTransform(594.675, 533.362)
    this.shape_145 = new cjs.Shape()
    this.shape_145.graphics
      .f('#029200')
      .s()
      .p('AgXAPQAFgPAOgKQAMgJAQACIgBALQgLAAgIAGQgIAHgCAMg')
    this.shape_145.setTransform(596.7, 684.4393)
    this.shape_146 = new cjs.Shape()
    this.shape_146.graphics
      .f('#00BCA2')
      .s()
      .p('AgEANQgoghg1gCIAGhQQBOAKA1A5QA2A4AEBMIg1AGQgJg2gogkg')
    this.shape_146.setTransform(658.025, 564.85)
    this.shape_147 = new cjs.Shape()
    this.shape_147.graphics.f('#00BCA2').s().p('AiTBbICZkHICOBTIiZEGg')
    this.shape_147.setTransform(576.8, 701.95)
    this.shape_148 = new cjs.Shape()
    this.shape_148.graphics.f('#ED1EE2').s().p('Ah4AHIAyhoIC/BbIgyBog')
    this.shape_148.setTransform(254.25, 637.7)
    this.shape_149 = new cjs.Shape()
    this.shape_149.graphics
      .f('#ED1EE2')
      .s()
      .p(
        'AgXBYQgggxAFg2QAFgxAfgdQAIAXARAPQgSAdAHAoQAJAvArAfQgOACgOAAQgYAAgXgGg'
      )
    this.shape_149.setTransform(424.0847, 808.2341)
    this.shape_150 = new cjs.Shape()
    this.shape_150.graphics
      .f('#482D91')
      .s()
      .p('AguAfQAGgrAcgdQAagaAhgCQgHARADASQgZAHgPAbQgQAgAJAmQgYgOgSgZg')
    this.shape_150.setTransform(475.3, 594.475)
    this.shape_151 = new cjs.Shape()
    this.shape_151.graphics.f('#FB8A3B').s().p('AgbgRIAogNIAPAwIgpANg')
    this.shape_151.setTransform(377.95, 726.925)
    this.shape_152 = new cjs.Shape()
    this.shape_152.graphics.f('#FB8A3B').s().p('AivCgIDcmIICDBJIjbGJg')
    this.shape_152.setTransform(426.425, 620.2)
    this.shape_153 = new cjs.Shape()
    this.shape_153.graphics.f('#FCCD21').s().p('AiZgMIEAhmIAyB/Ij/Bmg')
    this.shape_153.setTransform(382.4, 761.625)
    this.shape_154 = new cjs.Shape()
    this.shape_154.graphics.f('#FCCD21').s().p('AhQAoIABhQICgABIgBBQg')
    this.shape_154.setTransform(405, 648.275)
    this.shape_155 = new cjs.Shape()
    this.shape_155.graphics.f('#029200').s().p('AiXAAIA9h4IDyB4Ig9B5g')
    this.shape_155.setTransform(485.05, 577.075)
    this.shape_156 = new cjs.Shape()
    this.shape_156.graphics
      .f('#C1277C')
      .s()
      .p('AgmAJQgQgvATgvIAhAMQgJAiAMAhQAOAfAfAQIgaAtQgrgcgPgxg')
    this.shape_156.setTransform(378.4768, 540.875)
    this.shape_157 = new cjs.Shape()
    this.shape_157.graphics
      .f('#029200')
      .s()
      .p('AiLAVIAegtQAwAaA2gJQA1gKAigqIA8A4Qg6A3hOAHIgUABQhDAAg4gng')
    this.shape_157.setTransform(365.125, 722.9221)
    this.shape_158 = new cjs.Shape()
    this.shape_158.graphics
      .f('#00BCA2')
      .s()
      .p('AAEBcQAMgrgRgoQgRgngmgTIAhg4QA0AiAUA8QATA7gXA6g')
    this.shape_158.setTransform(463.7922, 512.325)
    this.shape_159 = new cjs.Shape()
    this.shape_159.graphics.f('#00BCA2').s().p('AisB+ICklTIC1BYIikFTg')
    this.shape_159.setTransform(323.45, 596.2)
    this.shape_160 = new cjs.Shape()
    this.shape_160.graphics.f('#ED1EE2').s().p('AhpAzIB4inIBbBCIh4Cng')
    this.shape_160.setTransform(30.875, 632.575)
    this.shape_161 = new cjs.Shape()
    this.shape_161.graphics.f('#C1277C').s().p('Ah9AUICyiIIBKBiIiyCHg')
    this.shape_161.setTransform(229.7, 755.75)
    this.shape_162 = new cjs.Shape()
    this.shape_162.graphics
      .f('#ED1EE2')
      .s()
      .p(
        'AgiCbQg/hQABhdQAAhWAyg4QASApAgAVQgcA1AUBGQAXBPBPAvQglAKgmAAQgbAAgegGg'
      )
    this.shape_162.setTransform(166.7998, 797.4571)
    this.shape_163 = new cjs.Shape()
    this.shape_163.graphics
      .f('#482D91')
      .s()
      .p('AgVALQAEgSAOgLQALgLAOABQgEAHABAIQgLACgIALQgHAMADARQgKgHgHgLg')
    this.shape_163.setTransform(283.725, 661.3739)
    this.shape_164 = new cjs.Shape()
    this.shape_164.graphics.f('#FB8A3B').s().p('AhOAZIArhiIByAxIgrBig')
    this.shape_164.setTransform(43.05, 839.55)
    this.shape_165 = new cjs.Shape()
    this.shape_165.graphics.f('#FB8A3B').s().p('AgqgaIAZgUIA8BJIgZAUg')
    this.shape_165.setTransform(167.35, 619.025)
    this.shape_166 = new cjs.Shape()
    this.shape_166.graphics.f('#482D91').s().p('AiuAZIAziVIEpBlIgxCUg')
    this.shape_166.setTransform(40.25, 715.3)
    this.shape_167 = new cjs.Shape()
    this.shape_167.graphics.f('#FCCD21').s().p('AgsAUIACgrIBXAFIgCAqg')
    this.shape_167.setTransform(81.05, 719.125)
    this.shape_168 = new cjs.Shape()
    this.shape_168.graphics.f('#FCCD21').s().p('AgWADIAhgWIAMARIghAWg')
    this.shape_168.setTransform(78.35, 571.575)
    this.shape_169 = new cjs.Shape()
    this.shape_169.graphics.f('#029200').s().p('Ag+AEIAWgzIBnArIgVA0g')
    this.shape_169.setTransform(139.65, 618.625)
    this.shape_170 = new cjs.Shape()
    this.shape_170.graphics
      .f('#C1277C')
      .s()
      .p('AguAFQgJg7Afg1IAkAVQgRAnAJApQALAoAiAYIgoAyQgugqgJg9g')
    this.shape_170.setTransform(13.1649, 527.375)
    this.shape_171 = new cjs.Shape()
    this.shape_171.graphics
      .f('#029200')
      .s()
      .p('AAAACQgJgDgKADIgFgOQAPgEANAHQAPAGAGANIgJAFQgGgKgKgDg')
    this.shape_171.setTransform(78.575, 749.9988)
    this.shape_172 = new cjs.Shape()
    this.shape_172.graphics
      .f('#00BCA2')
      .s()
      .p('AhegIQAMiSBlhoIBKBEQhABQACBmQABBkBBBLIh4BcQhUh6ANiRg')
    this.shape_172.setTransform(130.269, 498)
    this.shape_173 = new cjs.Shape()
    this.shape_173.graphics.f('#00BCA2').s().p('AjNCXIDDmVIDYBpIjDGUg')
    this.shape_173.setTransform(99.475, 660.6)
    this.shape_174 = new cjs.Shape()
    this.shape_174.graphics
      .f('#482D91')
      .s()
      .p('ABHBcQgMg1g5gjQg/gmhRAPQAhgyA1ggQBaAPA5BAQA0A5AABEQglgRgjAGg')
    this.shape_174.setTransform(39.175, 631.05)
    this.shape_175 = new cjs.Shape()
    this.shape_175.graphics.f('#ED1EE2').s().p('AhrBKIBpjMIBuA5IhpDMg')
    this.shape_175.setTransform(1070.825, 315.975)
    this.shape_176 = new cjs.Shape()
    this.shape_176.graphics.f('#C1277C').s().p('AhXBBIBRitIBdAtIhRCrg')
    this.shape_176.setTransform(1201.7, 469.05)
    this.shape_177 = new cjs.Shape()
    this.shape_177.graphics
      .f('#482D91')
      .s()
      .p('AAuA9QgHgkglgXQgpgag2AJQAYghAjgUQA7AMAkAqQAiAngBAsQgXgLgZADg')
    this.shape_177.setTransform(1200.9264, 363.475)
    this.shape_178 = new cjs.Shape()
    this.shape_178.graphics.f('#FB8A3B').s().p('AheAkIBJiGIB0A/IhJCGg')
    this.shape_178.setTransform(1102.675, 556.7)
    this.shape_179 = new cjs.Shape()
    this.shape_179.graphics.f('#FB8A3B').s().p('AgbgsIAggIIAXBhIggAIg')
    this.shape_179.setTransform(1147.425, 449.025)
    this.shape_180 = new cjs.Shape()
    this.shape_180.graphics.f('#482D91').s().p('Aieg1IBrhpIDSDUIhrBpg')
    this.shape_180.setTransform(950.45, 401.825)
    this.shape_181 = new cjs.Shape()
    this.shape_181.graphics.f('#FCCD21').s().p('AhhBiIBPjrIB0AoIhPDrg')
    this.shape_181.setTransform(1107.275, 549.225)
    this.shape_182 = new cjs.Shape()
    this.shape_182.graphics.f('#FCCD21').s().p('AhzgOIA6hXICtB0Ig6BXg')
    this.shape_182.setTransform(1062.125, 305.125)
    this.shape_183 = new cjs.Shape()
    this.shape_183.graphics.f('#029200').s().p('AhkilICsgOIAdFYIisAPg')
    this.shape_183.setTransform(1195.775, 318.8)
    this.shape_184 = new cjs.Shape()
    this.shape_184.graphics
      .f('#C1277C')
      .s()
      .p('AgSALQgSgXACgeIAVAAQABAWANAPQAOAPAUADIgGAeQgdgHgSgZg')
    this.shape_184.setTransform(1115.29, 241.325)
    this.shape_185 = new cjs.Shape()
    this.shape_185.graphics
      .f('#029200')
      .s()
      .p('AgcgRQAcgoAtgLIAKAgQggALgRAcQgPAdAFAgIgxAFQgDgxAcglg')
    this.shape_185.setTransform(1090.9855, 516.35)
    this.shape_186 = new cjs.Shape()
    this.shape_186.graphics.f('#00BCA2').s().p('AhRhoIB7gVIAoDlIh6AWg')
    this.shape_186.setTransform(1069.1, 400.7)
    this.shape_187 = new cjs.Shape()
    this.shape_187.graphics.f('#ED1EE2').s().p('Ah/gXIBOhhICyCQIhPBhg')
    this.shape_187.setTransform(706.3, 329.125)
    this.shape_188 = new cjs.Shape()
    this.shape_188.graphics
      .f('#ED1EE2')
      .s()
      .p('AgKANQgBgNAHgJQAFgKAKgDQgBAEACAHQgHAEgDAIQgCALAEALQgIgEgGgGg')
    this.shape_188.setTransform(894.8938, 474.5)
    this.shape_189 = new cjs.Shape()
    this.shape_189.graphics
      .f('#482D91')
      .s()
      .p('AAfA7QACgigcgdQgdghgzgFQAbgYAmgKQAyAYAWAwQAVAqgLAnQgTgQgWgCg')
    this.shape_189.setTransform(1046.2785, 375.075)
    this.shape_190 = new cjs.Shape()
    this.shape_190.graphics.f('#FB8A3B').s().p('AhSgMIBThHIBSBgIhTBHg')
    this.shape_190.setTransform(907.125, 541.025)
    this.shape_191 = new cjs.Shape()
    this.shape_191.graphics.f('#FB8A3B').s().p('AhPBKIBjizIA8AgIhjCzg')
    this.shape_191.setTransform(961.975, 448.1)
    this.shape_192 = new cjs.Shape()
    this.shape_192.graphics.f('#FCCD21').s().p('AgrhLIBNgFIAKCcIhOAEg')
    this.shape_192.setTransform(919.875, 535.2)
    this.shape_193 = new cjs.Shape()
    this.shape_193.graphics.f('#FCCD21').s().p('AiFAPIAqhwIDhBTIgpBwg')
    this.shape_193.setTransform(909.925, 345.825)
    this.shape_194 = new cjs.Shape()
    this.shape_194.graphics.f('#029200').s().p('AhHAhIBXhtIA4AsIhYBug')
    this.shape_194.setTransform(865.25, 354.3)
    this.shape_195 = new cjs.Shape()
    this.shape_195.graphics
      .f('#C1277C')
      .s()
      .p('AgCAHQgJgEgFgJIAGgDQAEAGAGADQAHABAHgBIADAJIgIABQgGAAgFgDg')
    this.shape_195.setTransform(836.725, 356.2231)
    this.shape_196 = new cjs.Shape()
    this.shape_196.graphics
      .f('#029200')
      .s()
      .p('AglgZQAngzA+gOIAMArQgrAOgYAlQgXAnAGArIhDAFQgChCAogyg')
    this.shape_196.setTransform(804.6202, 424.55)
    this.shape_197 = new cjs.Shape()
    this.shape_197.graphics
      .f('#00BCA2')
      .s()
      .p('AkaAzQBhiHCggrQCfgrCVBFIgsBpQhtglhrAnQhrAog3Bjg')
    this.shape_197.setTransform(888.65, 349.0496)
    this.shape_198 = new cjs.Shape()
    this.shape_198.graphics.f('#00BCA2').s().p('AgUAfIAGhBIAjAEIgHBBg')
    this.shape_198.setTransform(773.5, 465.675)
    this.shape_199 = new cjs.Shape()
    this.shape_199.graphics.f('#ED1EE2').s().p('AhoAWICPh5IBDBOIiQB5g')
    this.shape_199.setTransform(497.05, 322.225)
    this.shape_200 = new cjs.Shape()
    this.shape_200.graphics.f('#C1277C').s().p('AhogHIA2hUICbBiIg2BVg')
    this.shape_200.setTransform(715.175, 467.8)
    this.shape_201 = new cjs.Shape()
    this.shape_201.graphics
      .f('#ED1EE2')
      .s()
      .p('Ag3BPQgLhJAig6QAfg2AygQQgEAfAOAaQgmAXgLAyQgNA6AfA5QgugOglgeg')
    this.shape_201.setTransform(704.8406, 566.4)
    this.shape_202 = new cjs.Shape()
    this.shape_202.graphics
      .f('#482D91')
      .s()
      .p('AhGAzQAGhDAtgwQAogqAygEQgKAdAHAaQgoAMgXArQgYAzARA8QgogVgcgng')
    this.shape_202.setTransform(727.55, 365.65)
    this.shape_203 = new cjs.Shape()
    this.shape_203.graphics.f('#FB8A3B').s().p('AgQgFIAUgLIAMAWIgSALg')
    this.shape_203.setTransform(650.95, 538.225)
    this.shape_204 = new cjs.Shape()
    this.shape_204.graphics.f('#FB8A3B').s().p('AhdARICehWIAdA0IieBXg')
    this.shape_204.setTransform(699.875, 394.45)
    this.shape_205 = new cjs.Shape()
    this.shape_205.graphics.f('#482D91').s().p('AguBIIASiXIBLAJIgSCXg')
    this.shape_205.setTransform(530.325, 502.4)
    this.shape_206 = new cjs.Shape()
    this.shape_206.graphics.f('#FCCD21').s().p('AhhgiIBDhAICACEIhCBBg')
    this.shape_206.setTransform(579.975, 454.55)
    this.shape_207 = new cjs.Shape()
    this.shape_207.graphics.f('#FCCD21').s().p('AiEAAIDUhpIA1BpIjUBqg')
    this.shape_207.setTransform(562.8, 371.2)
    this.shape_208 = new cjs.Shape()
    this.shape_208.graphics.f('#029200').s().p('Ah5h3ICPgxIBjEgIiPAxg')
    this.shape_208.setTransform(634.15, 316.25)
    this.shape_209 = new cjs.Shape()
    this.shape_209.graphics
      .f('#C1277C')
      .s()
      .p('AgIAJQgMgMgCgRIAMgCQADAMAIAIQAJAHANAAIgBASQgSgCgMgMg')
    this.shape_209.setTransform(606.05, 295.55)
    this.shape_210 = new cjs.Shape()
    this.shape_210.graphics
      .f('#029200')
      .s()
      .p('AggATQAGgUAUgNQARgMAWADIgBAPQgPAAgNAIQgLAKgCAPg')
    this.shape_210.setTransform(634.7, 499.6785)
    this.shape_211 = new cjs.Shape()
    this.shape_211.graphics
      .f('#00BCA2')
      .s()
      .p('AgFALQgtgdg2AHIgEhRQBPgBA9AxQA9AwAQBMIg0ANQgRg0gtgeg')
    this.shape_211.setTransform(637.375, 282.924)
    this.shape_212 = new cjs.Shape()
    this.shape_212.graphics.f('#00BCA2').s().p('AiehRICLhgICyEDIiLBgg')
    this.shape_212.setTransform(565.025, 408.925)
    this.shape_213 = new cjs.Shape()
    this.shape_213.graphics.f('#ED1EE2').s().p('Ag6gCIBdgtIAZAyIheAtg')
    this.shape_213.setTransform(291.85, 313.225)
    this.shape_214 = new cjs.Shape()
    this.shape_214.graphics
      .f('#ED1EE2')
      .s()
      .p('AinBGQApgWAVgmQA6AaBIgcQBRgfAshXQAXBDgHBHQhPBKhjAIIgZABQhLAAg3gpg')
    this.shape_214.setTransform(435.7157, 556.8011)
    this.shape_215 = new cjs.Shape()
    this.shape_215.graphics
      .f('#482D91')
      .s()
      .p('AhmBAQANheBAg9QA6g4BGgDQgQAnAIAlQg4AOgiA8QglBDATBUQg2ghgjg2g')
    this.shape_215.setTransform(551.275, 414.825)
    this.shape_216 = new cjs.Shape()
    this.shape_216.graphics.f('#FB8A3B').s().p('AhegUIBlhMIBYB1IhlBMg')
    this.shape_216.setTransform(288.575, 490.225)
    this.shape_217 = new cjs.Shape()
    this.shape_217.graphics.f('#FB8A3B').s().p('AghAHIA4ggIALATIg4Agg')
    this.shape_217.setTransform(425.375, 385.95)
    this.shape_218 = new cjs.Shape()
    this.shape_218.graphics.f('#FCCD21').s().p('AhvgXIDGgzIAYBiIjFAzg')
    this.shape_218.setTransform(398.55, 461.8)
    this.shape_219 = new cjs.Shape()
    this.shape_219.graphics.f('#FCCD21').s().p('AgfgLIA8gHIADAeIg8AHg')
    this.shape_219.setTransform(291.575, 370.825)
    this.shape_220 = new cjs.Shape()
    this.shape_220.graphics.f('#029200').s().p('AicAlIAhiLIEYBCIghCLg')
    this.shape_220.setTransform(457.875, 389.7)
    this.shape_221 = new cjs.Shape()
    this.shape_221.graphics
      .f('#C1277C')
      .s()
      .p('AhgALIAVgeQAhATAmgFQAkgGAZgcIAoAnQgpAlg3ADIgIAAQgxAAgogdg')
    this.shape_221.setTransform(275.925, 312.2377)
    this.shape_222 = new cjs.Shape()
    this.shape_222.graphics
      .f('#029200')
      .s()
      .p('AgCAHQgKgFgDgJIAGgDQAEAHAFADQAIACAGgCIACALIgEAAQgIAAgGgEg')
    this.shape_222.setTransform(387.5, 521.5911)
    this.shape_223 = new cjs.Shape()
    this.shape_223.graphics
      .f('#00BCA2')
      .s()
      .p('AiFAZQgqioBMibIBtAwQgpByAnByQAnBwBmA9IhmCUQiLhpgpipg')
    this.shape_223.setTransform(391.1671, 281.675)
    this.shape_224 = new cjs.Shape()
    this.shape_224.graphics.f('#00BCA2').s().p('AjHBRIDykjICdCBIjyElg')
    this.shape_224.setTransform(354.975, 436.65)
    this.shape_225 = new cjs.Shape()
    this.shape_225.graphics.f('#ED1EE2').s().p('AhxALIArhkIC4BPIgrBjg')
    this.shape_225.setTransform(34.075, 392.3)
    this.shape_226 = new cjs.Shape()
    this.shape_226.graphics.f('#C1277C').s().p('AhLgcICNgTIAKBNIiNASg')
    this.shape_226.setTransform(252.725, 511.9)
    this.shape_227 = new cjs.Shape()
    this.shape_227.graphics
      .f('#ED1EE2')
      .s()
      .p(
        'AgXAWQgjgNgOgbQASgBAOgKQASATAeADQAiADAfgYQgDAcgPAYQgUAGgTAAQgTAAgUgIg'
      )
    this.shape_227.setTransform(129.9, 550.7073)
    this.shape_228 = new cjs.Shape()
    this.shape_228.graphics
      .f('#482D91')
      .s()
      .p('AhcB/QgRh2A5hfQA0hYBSgbQgFA0AUArQg9AkgVBSQgWBfAyBfQhKgWg9g1g')
    this.shape_228.setTransform(242.6398, 319.775)
    this.shape_229 = new cjs.Shape()
    this.shape_229.graphics.f('#FB8A3B').s().p('AhygCICGhuIBfBzIiGBug')
    this.shape_229.setTransform(140.775, 591.975)
    this.shape_230 = new cjs.Shape()
    this.shape_230.graphics.f('#FB8A3B').s().p('AhDBBIBSidIA1AcIhSCdg')
    this.shape_230.setTransform(190.425, 484.075)
    this.shape_231 = new cjs.Shape()
    this.shape_231.graphics.f('#FCCD21').s().p('AhCAcIAEhAICBAKIgFA/g')
    this.shape_231.setTransform(102.5, 508.45)
    this.shape_232 = new cjs.Shape()
    this.shape_232.graphics.f('#FCCD21').s().p('AhKAAIB3g7IAeA7Ih3A8g')
    this.shape_232.setTransform(57.325, 294.525)
    this.shape_233 = new cjs.Shape()
    this.shape_233.graphics.f('#029200').s().p('AidgfIBYhyIDjCxIhYByg')
    this.shape_233.setTransform(184.525, 359.875)
    this.shape_234 = new cjs.Shape()
    this.shape_234.graphics
      .f('#C1277C')
      .s()
      .p('AgsAFQgIg5AegyIAiAUQgQAlAIAoQAKAmAgAXIgmAuQgrgngJg6g')
    this.shape_234.setTransform(118.2062, 249.4)
    this.shape_235 = new cjs.Shape()
    this.shape_235.graphics
      .f('#029200')
      .s()
      .p('AgJA7QhWgQg4hBIAsgoQAtAqA7AFQA7AFAwgiIAwBLQg5Agg+AAQgVAAgVgEg')
    this.shape_235.setTransform(75.1, 447.519)
    this.shape_236 = new cjs.Shape()
    this.shape_236.graphics
      .f('#00BCA2')
      .s()
      .p('AgbAUQAEgUAQgLQAPgMAUAAIAAAOQgNABgLAJQgKAJgBAOg')
    this.shape_236.setTransform(220.1, 347.574)
    this.shape_237 = new cjs.Shape()
    this.shape_237.graphics.f('#00BCA2').s().p('AhGg+IBTgfIA6CcIhTAfg')
    this.shape_237.setTransform(99.6, 369.025)
    this.shape_238 = new cjs.Shape()
    this.shape_238.graphics
      .f('#482D91')
      .s()
      .p('AhaBsQgJhsA4hUQAyhMBMgUQgIAuASAnQg6AegWBKQgZBUApBZQhCgYg1gyg')
    this.shape_238.setTransform(46.9377, 389.9)
    this.shape_239 = new cjs.Shape()
    this.shape_239.graphics.f('#ED1EE2').s().p('AgdAFIApggIASAXIgpAfg')
    this.shape_239.setTransform(1021.875, 32.45)
    this.shape_240 = new cjs.Shape()
    this.shape_240.graphics.f('#C1277C').s().p('AgSgBIAegMIAHAQIgeALg')
    this.shape_240.setTransform(1208.875, 268.375)
    this.shape_241 = new cjs.Shape()
    this.shape_241.graphics
      .f('#482D91')
      .s()
      .p('AhpCHQARgjgCgjQA1gIAlg1QApg6gJhQQAvAkAbA1QgVBWhCA0Qg2Aqg7AAIgLAAg')
    this.shape_241.setTransform(1202.4, 179.1199)
    this.shape_242 = new cjs.Shape()
    this.shape_242.graphics.f('#FB8A3B').s().p('AhRhDICggDIADCJIigAFg')
    this.shape_242.setTransform(1064.975, 260.5)
    this.shape_243 = new cjs.Shape()
    this.shape_243.graphics.f('#FB8A3B').s().p('Ah5AlIADhQIDwAIIgDBPg')
    this.shape_243.setTransform(1176.225, 137.725)
    this.shape_244 = new cjs.Shape()
    this.shape_244.graphics.f('#482D91').s().p('AgjAmIAbhYIAsANIgbBYg')
    this.shape_244.setTransform(1053.325, 157.025)
    this.shape_245 = new cjs.Shape()
    this.shape_245.graphics.f('#FCCD21').s().p('AhDhUIBegUIApC9IheAUg')
    this.shape_245.setTransform(1085.65, 200.525)
    this.shape_246 = new cjs.Shape()
    this.shape_246.graphics.f('#FCCD21').s().p('AhOAYIAMhIICRAZIgMBIg')
    this.shape_246.setTransform(1048.975, 135.7)
    this.shape_247 = new cjs.Shape()
    this.shape_247.graphics.f('#029200').s().p('Ai3hRIFngQIAICzIlnAQg')
    this.shape_247.setTransform(1219.25, 148.25)
    this.shape_248 = new cjs.Shape()
    this.shape_248.graphics
      .f('#029200')
      .s()
      .p('AgCALQgggbgqgCIAIg/QA8AJApAuQApAsACA9IgqADQgGgqgegdg')
    this.shape_248.setTransform(1114.75, 278.975)
    this.shape_249 = new cjs.Shape()
    this.shape_249.graphics.f('#00BCA2').s().p('AhDBOIAoixIBfAWIgoCxg')
    this.shape_249.setTransform(1003.5, 96.65)
    this.shape_250 = new cjs.Shape()
    this.shape_250.graphics.f('#ED1EE2').s().p('AhogZIBGhMICLCAIhGBLg')
    this.shape_250.setTransform(807.225, 54.525)
    this.shape_251 = new cjs.Shape()
    this.shape_251.graphics
      .f('#ED1EE2')
      .s()
      .p('AgkADQgMgZAIgXQALAKANABQgCAUAQARQARAUAdAEQgRAOgWAFQgcgPgNgcg')
    this.shape_251.setTransform(984.8308, 203)
    this.shape_252 = new cjs.Shape()
    this.shape_252.graphics
      .f('#482D91')
      .s()
      .p('AAMAYQABgOgKgMQgMgPgVgDQANgJAPgDQAUALAIAUQAIASgGAQQgHgHgJgCg')
    this.shape_252.setTransform(1021.4163, 158.825)
    this.shape_253 = new cjs.Shape()
    this.shape_253.graphics.f('#FB8A3B').s().p('AhQA1IAoiMIB5AiIgoCNg')
    this.shape_253.setTransform(879.325, 262.95)
    this.shape_254 = new cjs.Shape()
    this.shape_254.graphics.f('#FB8A3B').s().p('AgpBiIARjJIBCAGIgRDJg')
    this.shape_254.setTransform(940.6, 165.45)
    this.shape_255 = new cjs.Shape()
    this.shape_255.graphics.f('#FCCD21').s().p('AhiCSIAqk4ICcAVIgrE4g')
    this.shape_255.setTransform(934.3, 242.225)
    this.shape_256 = new cjs.Shape()
    this.shape_256.graphics.f('#FCCD21').s().p('AgQgeIAfgBIACA+IgfABg')
    this.shape_256.setTransform(836.275, 108.7)
    this.shape_257 = new cjs.Shape()
    this.shape_257.graphics.f('#029200').s().p('Ag7gTIAogoIBPBPIgoAog')
    this.shape_257.setTransform(976.775, 144.925)
    this.shape_258 = new cjs.Shape()
    this.shape_258.graphics
      .f('#C1277C')
      .s()
      .p('AACB+QASg6gVg4QgXg2g1gcIAvhMQBIAwAZBUQAZBSgiBPg')
    this.shape_258.setTransform(830.0797, 40.175)
    this.shape_259 = new cjs.Shape()
    this.shape_259.graphics
      .f('#029200')
      .s()
      .p('AgrAMQgSg1AUg1IAlAMQgKAnAPAkQAQAiAjARIgcAzQgwgegTg1g')
    this.shape_259.setTransform(839.9612, 234.45)
    this.shape_260 = new cjs.Shape()
    this.shape_260.graphics
      .f('#00BCA2')
      .s()
      .p('AhsgQQAYiiB4hsIBOBRQhNBVgGBxQgGBwBEBYIiNBeQhUiOAYihg')
    this.shape_260.setTransform(883.3596, 28.65)
    this.shape_261 = new cjs.Shape()
    this.shape_261.graphics.f('#00BCA2').s().p('AhLBMIA3i1IBhAeIg4C1g')
    this.shape_261.setTransform(864.7, 203.875)
    this.shape_262 = new cjs.Shape()
    this.shape_262.graphics.f('#ED1EE2').s().p('AhBAMIBahJIApAyIhbBJg')
    this.shape_262.setTransform(542.05, 117.95)
    this.shape_263 = new cjs.Shape()
    this.shape_263.graphics.f('#C1277C').s().p('Ag6gQIBogXIANA3IhnAZg')
    this.shape_263.setTransform(737.675, 190.15)
    this.shape_264 = new cjs.Shape()
    this.shape_264.graphics
      .f('#ED1EE2')
      .s()
      .p('AhDA4QADhEArgyQAmgsAygGQgIAcAHAbQgnAOgUAtQgWA0ASA7QgogUgeglg')
    this.shape_264.setTransform(666.2, 253.7)
    this.shape_265 = new cjs.Shape()
    this.shape_265.graphics
      .f('#482D91')
      .s()
      .p('AA3BbQgBg0gugqQg0gxhPgBQApgoA4gVQBQAgAqBGQAlBAgMA/QgfgWgjgCg')
    this.shape_265.setTransform(769.0313, 97.275)
    this.shape_266 = new cjs.Shape()
    this.shape_266.graphics.f('#FB8A3B').s().p('AgagNIArgLIAKAmIgrALg')
    this.shape_266.setTransform(574.525, 336.375)
    this.shape_267 = new cjs.Shape()
    this.shape_267.graphics.f('#FB8A3B').s().p('AiPANIAUhYIELA+IgUBYg')
    this.shape_267.setTransform(691.35, 109)
    this.shape_268 = new cjs.Shape()
    this.shape_268.graphics.f('#482D91').s().p('AgVAQIAVgqIAWALIgWAqg')
    this.shape_268.setTransform(532.275, 254.9)
    this.shape_269 = new cjs.Shape()
    this.shape_269.graphics.f('#FCCD21').s().p('AiLBAIAEiIIETAJIgFCIg')
    this.shape_269.setTransform(695.15, 216.825)
    this.shape_270 = new cjs.Shape()
    this.shape_270.graphics.f('#FCCD21').s().p('Ah2giIBMhRIChCWIhMBRg')
    this.shape_270.setTransform(626.5, 138.4)
    this.shape_271 = new cjs.Shape()
    this.shape_271.graphics.f('#029200').s().p('AhXhXIBpgjIBGDSIhoAjg')
    this.shape_271.setTransform(731.35, 72.025)
    this.shape_272 = new cjs.Shape()
    this.shape_272.graphics
      .f('#C1277C')
      .s()
      .p('AgCAVQgfgFgUgVIAPgPQAQAOAWABQAUABARgNIARAaQgVAMgYAAIgLAAg')
    this.shape_272.setTransform(535.775, 100.89)
    this.shape_273 = new cjs.Shape()
    this.shape_273.graphics
      .f('#029200')
      .s()
      .p('AgKAlQgygQgdgrIAegVQAYAdAjAHQAjAHAggQIAXAxQgcALgdAAQgVAAgWgHg')
    this.shape_273.setTransform(602.225, 277.9634)
    this.shape_274 = new cjs.Shape()
    this.shape_274.graphics.f('#00BCA2').s().p('AgVgRIAXgKIAUAtIgXAKg')
    this.shape_274.setTransform(572.825, 177.575)
    this.shape_275 = new cjs.Shape()
    this.shape_275.graphics.f('#ED1EE2').s().p('AiJAlIAfiEID0A7IggCEg')
    this.shape_275.setTransform(243.225, 37.125)
    this.shape_276 = new cjs.Shape()
    this.shape_276.graphics
      .f('#ED1EE2')
      .s()
      .p('AgLAOQhOgOhLAvQAPg+Ang0QBfgUBQApQBKAmAaBBQgrgCghAUQgggxhEgMg')
    this.shape_276.setTransform(465.55, 236.2471)
    this.shape_277 = new cjs.Shape()
    this.shape_277.graphics
      .f('#482D91')
      .s()
      .p('AgRAUQhhgLhXA/QALhMAthEQBzgfBmAsQBdAoAlBOQgzAAgoAbQgsg4hUgKg')
    this.shape_277.setTransform(478.975, 86.4429)
    this.shape_278 = new cjs.Shape()
    this.shape_278.graphics.f('#FB8A3B').s().p('AhjABIBVhjIByBiIhVBjg')
    this.shape_278.setTransform(324.625, 244.575)
    this.shape_279 = new cjs.Shape()
    this.shape_279.graphics.f('#FB8A3B').s().p('Ajug3IBSiEIGLDzIhRCEg')
    this.shape_279.setTransform(462.95, 230.325)
    this.shape_280 = new cjs.Shape()
    this.shape_280.graphics.f('#FCCD21').s().p('AiFBYICQj3IB7BJIiPD2g')
    this.shape_280.setTransform(394.375, 278.675)
    this.shape_281 = new cjs.Shape()
    this.shape_281.graphics.f('#FCCD21').s().p('Ah0ATIAghlIDJBBIggBkg')
    this.shape_281.setTransform(385.775, 148.15)
    this.shape_282 = new cjs.Shape()
    this.shape_282.graphics.f('#029200').s().p('AhJghICQgFIADBIIiRAFg')
    this.shape_282.setTransform(465.1, 56.65)
    this.shape_283 = new cjs.Shape()
    this.shape_283.graphics
      .f('#029200')
      .s()
      .p('AgDAKQgugZgyAKIgKhNQBMgGA9AqQA+AqAUBHIgxARQgTgxgtgZg')
    this.shape_283.setTransform(336.35, 269.0319)
    this.shape_284 = new cjs.Shape()
    this.shape_284.graphics
      .f('#00BCA2')
      .s()
      .p('AgzDzQA4hrgVh2QgXh1hchKIB5iEQB7B8ARCtQAQCshhCOg')
    this.shape_284.setTransform(417.1199, 87.4)
    this.shape_285 = new cjs.Shape()
    this.shape_285.graphics.f('#00BCA2').s().p('AiLg2IBshcICrDIIhsBdg')
    this.shape_285.setTransform(243.125, 101.525)
    this.shape_286 = new cjs.Shape()
    this.shape_286.graphics.f('#ED1EE2').s().p('AgIAOIABgcIAPAAIgBAdg')
    this.shape_286.setTransform(22.3, 49.7)
    this.shape_287 = new cjs.Shape()
    this.shape_287.graphics.f('#C1277C').s().p('AgXARIAXguIAYANIgXAug')
    this.shape_287.setTransform(241.925, 242.425)
    this.shape_288 = new cjs.Shape()
    this.shape_288.graphics
      .f('#ED1EE2')
      .s()
      .p('AgXAHQAHgDADgEQAHAEAKgDQALgDAHgMQADAIgCALQgLAJgNAAIgCABQgMAAgIgIg')
    this.shape_288.setTransform(247.94, 274.8016)
    this.shape_289 = new cjs.Shape()
    this.shape_289.graphics
      .f('#482D91')
      .s()
      .p('AgYAZQAEgHABgHQALAAAKgJQALgKAAgRQAIAJAEANQgIAQgPAIQgJAFgJAAIgIgBg')
    this.shape_289.setTransform(281.35, 179.5807)
    this.shape_290 = new cjs.Shape()
    this.shape_290.graphics.f('#FB8A3B').s().p('AhBAEIA0hDIBPA7Ig0BEg')
    this.shape_290.setTransform(139.325, 250.975)
    this.shape_291 = new cjs.Shape()
    this.shape_291.graphics.f('#FB8A3B').s().p('AgiAJIABgVIBFADIgCAXg')
    this.shape_291.setTransform(172.65, 212.2)
    this.shape_292 = new cjs.Shape()
    this.shape_292.graphics.f('#FCCD21').s().p('AhSgVICWgfIAPBKIiWAfg')
    this.shape_292.setTransform(182.575, 194.375)
    this.shape_293 = new cjs.Shape()
    this.shape_293.graphics.f('#FCCD21').s().p('AhlgNICtg7IAeBWIiuA7g')
    this.shape_293.setTransform(45.35, 145.95)
    this.shape_294 = new cjs.Shape()
    this.shape_294.graphics.f('#029200').s().p('AinBCIAPigIFAAdIgPCgg')
    this.shape_294.setTransform(118.275, 140.625)
    this.shape_295 = new cjs.Shape()
    this.shape_295.graphics
      .f('#029200')
      .s()
      .p('AgZADQAKgKAPgDQANgDANAHIgEAIQgKgDgKACQgJADgFAIg')
    this.shape_295.setTransform(100.825, 237.23)
    this.shape_296 = new cjs.Shape()
    this.shape_296.graphics
      .f('#00BCA2')
      .s()
      .p('AhIAEQgIhiA6hQIA4AlQgiA8ALBEQAMBDAzArIhHBKQhEhIgHhjg')
    this.shape_296.setTransform(226.6817, 52.725)
    this.shape_297 = new cjs.Shape()
    this.shape_297.graphics.f('#00BCA2').s().p('AimB1ICilAICrBYIiiE/g')
    this.shape_297.setTransform(91.075, 124.95)
    this.shape_298 = new cjs.Shape()
    this.shape_298.graphics
      .f('#482D91')
      .s()
      .p('Ag3A+QgFg/AjgyQAfguAugLQgFAbAKAZQgjARgPAsQgPAyAXA2QgngPgfggg')
    this.shape_298.setTransform(38.7244, 165.975)
    var maskedShapeInstanceList = [
      this.shape,
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
      this.shape_28,
      this.shape_29,
      this.shape_30,
      this.shape_31,
      this.shape_32,
      this.shape_33,
      this.shape_34,
      this.shape_35,
      this.shape_36,
      this.shape_37,
      this.shape_38,
      this.shape_39,
      this.shape_40,
      this.shape_41,
      this.shape_42,
      this.shape_43,
      this.shape_44,
      this.shape_45,
      this.shape_46,
      this.shape_47,
      this.shape_48,
      this.shape_49,
      this.shape_50,
      this.shape_51,
      this.shape_52,
      this.shape_53,
      this.shape_54,
      this.shape_55,
      this.shape_56,
      this.shape_57,
      this.shape_58,
      this.shape_59,
      this.shape_60,
      this.shape_61,
      this.shape_62,
      this.shape_63,
      this.shape_64,
      this.shape_65,
      this.shape_66,
      this.shape_67,
      this.shape_68,
      this.shape_69,
      this.shape_70,
      this.shape_71,
      this.shape_72,
      this.shape_73,
      this.shape_74,
      this.shape_75,
      this.shape_76,
      this.shape_77,
      this.shape_78,
      this.shape_79,
      this.shape_80,
      this.shape_81,
      this.shape_82,
      this.shape_83,
      this.shape_84,
      this.shape_85,
      this.shape_86,
      this.shape_87,
      this.shape_88,
      this.shape_89,
      this.shape_90,
      this.shape_91,
      this.shape_92,
      this.shape_93,
      this.shape_94,
      this.shape_95,
      this.shape_96,
      this.shape_97,
      this.shape_98,
      this.shape_99,
      this.shape_100,
      this.shape_101,
      this.shape_102,
      this.shape_103,
      this.shape_104,
      this.shape_105,
      this.shape_106,
      this.shape_107,
      this.shape_108,
      this.shape_109,
      this.shape_110,
      this.shape_111,
      this.shape_112,
      this.shape_113,
      this.shape_114,
      this.shape_115,
      this.shape_116,
      this.shape_117,
      this.shape_118,
      this.shape_119,
      this.shape_120,
      this.shape_121,
      this.shape_122,
      this.shape_123,
      this.shape_124,
      this.shape_125,
      this.shape_126,
      this.shape_127,
      this.shape_128,
      this.shape_129,
      this.shape_130,
      this.shape_131,
      this.shape_132,
      this.shape_133,
      this.shape_134,
      this.shape_135,
      this.shape_136,
      this.shape_137,
      this.shape_138,
      this.shape_139,
      this.shape_140,
      this.shape_141,
      this.shape_142,
      this.shape_143,
      this.shape_144,
      this.shape_145,
      this.shape_146,
      this.shape_147,
      this.shape_148,
      this.shape_149,
      this.shape_150,
      this.shape_151,
      this.shape_152,
      this.shape_153,
      this.shape_154,
      this.shape_155,
      this.shape_156,
      this.shape_157,
      this.shape_158,
      this.shape_159,
      this.shape_160,
      this.shape_161,
      this.shape_162,
      this.shape_163,
      this.shape_164,
      this.shape_165,
      this.shape_166,
      this.shape_167,
      this.shape_168,
      this.shape_169,
      this.shape_170,
      this.shape_171,
      this.shape_172,
      this.shape_173,
      this.shape_174,
      this.shape_175,
      this.shape_176,
      this.shape_177,
      this.shape_178,
      this.shape_179,
      this.shape_180,
      this.shape_181,
      this.shape_182,
      this.shape_183,
      this.shape_184,
      this.shape_185,
      this.shape_186,
      this.shape_187,
      this.shape_188,
      this.shape_189,
      this.shape_190,
      this.shape_191,
      this.shape_192,
      this.shape_193,
      this.shape_194,
      this.shape_195,
      this.shape_196,
      this.shape_197,
      this.shape_198,
      this.shape_199,
      this.shape_200,
      this.shape_201,
      this.shape_202,
      this.shape_203,
      this.shape_204,
      this.shape_205,
      this.shape_206,
      this.shape_207,
      this.shape_208,
      this.shape_209,
      this.shape_210,
      this.shape_211,
      this.shape_212,
      this.shape_213,
      this.shape_214,
      this.shape_215,
      this.shape_216,
      this.shape_217,
      this.shape_218,
      this.shape_219,
      this.shape_220,
      this.shape_221,
      this.shape_222,
      this.shape_223,
      this.shape_224,
      this.shape_225,
      this.shape_226,
      this.shape_227,
      this.shape_228,
      this.shape_229,
      this.shape_230,
      this.shape_231,
      this.shape_232,
      this.shape_233,
      this.shape_234,
      this.shape_235,
      this.shape_236,
      this.shape_237,
      this.shape_238,
      this.shape_239,
      this.shape_240,
      this.shape_241,
      this.shape_242,
      this.shape_243,
      this.shape_244,
      this.shape_245,
      this.shape_246,
      this.shape_247,
      this.shape_248,
      this.shape_249,
      this.shape_250,
      this.shape_251,
      this.shape_252,
      this.shape_253,
      this.shape_254,
      this.shape_255,
      this.shape_256,
      this.shape_257,
      this.shape_258,
      this.shape_259,
      this.shape_260,
      this.shape_261,
      this.shape_262,
      this.shape_263,
      this.shape_264,
      this.shape_265,
      this.shape_266,
      this.shape_267,
      this.shape_268,
      this.shape_269,
      this.shape_270,
      this.shape_271,
      this.shape_272,
      this.shape_273,
      this.shape_274,
      this.shape_275,
      this.shape_276,
      this.shape_277,
      this.shape_278,
      this.shape_279,
      this.shape_280,
      this.shape_281,
      this.shape_282,
      this.shape_283,
      this.shape_284,
      this.shape_285,
      this.shape_286,
      this.shape_287,
      this.shape_288,
      this.shape_289,
      this.shape_290,
      this.shape_291,
      this.shape_292,
      this.shape_293,
      this.shape_294,
      this.shape_295,
      this.shape_296,
      this.shape_297,
      this.shape_298,
    ]
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask
    }
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_298 },
            { t: this.shape_297 },
            { t: this.shape_296 },
            { t: this.shape_295 },
            { t: this.shape_294 },
            { t: this.shape_293 },
            { t: this.shape_292 },
            { t: this.shape_291 },
            { t: this.shape_290 },
            { t: this.shape_289 },
            { t: this.shape_288 },
            { t: this.shape_287 },
            { t: this.shape_286 },
            { t: this.shape_285 },
            { t: this.shape_284 },
            { t: this.shape_283 },
            { t: this.shape_282 },
            { t: this.shape_281 },
            { t: this.shape_280 },
            { t: this.shape_279 },
            { t: this.shape_278 },
            { t: this.shape_277 },
            { t: this.shape_276 },
            { t: this.shape_275 },
            { t: this.shape_274 },
            { t: this.shape_273 },
            { t: this.shape_272 },
            { t: this.shape_271 },
            { t: this.shape_270 },
            { t: this.shape_269 },
            { t: this.shape_268 },
            { t: this.shape_267 },
            { t: this.shape_266 },
            { t: this.shape_265 },
            { t: this.shape_264 },
            { t: this.shape_263 },
            { t: this.shape_262 },
            { t: this.shape_261 },
            { t: this.shape_260 },
            { t: this.shape_259 },
            { t: this.shape_258 },
            { t: this.shape_257 },
            { t: this.shape_256 },
            { t: this.shape_255 },
            { t: this.shape_254 },
            { t: this.shape_253 },
            { t: this.shape_252 },
            { t: this.shape_251 },
            { t: this.shape_250 },
            { t: this.shape_249 },
            { t: this.shape_248 },
            { t: this.shape_247 },
            { t: this.shape_246 },
            { t: this.shape_245 },
            { t: this.shape_244 },
            { t: this.shape_243 },
            { t: this.shape_242 },
            { t: this.shape_241 },
            { t: this.shape_240 },
            { t: this.shape_239 },
            { t: this.shape_238 },
            { t: this.shape_237 },
            { t: this.shape_236 },
            { t: this.shape_235 },
            { t: this.shape_234 },
            { t: this.shape_233 },
            { t: this.shape_232 },
            { t: this.shape_231 },
            { t: this.shape_230 },
            { t: this.shape_229 },
            { t: this.shape_228 },
            { t: this.shape_227 },
            { t: this.shape_226 },
            { t: this.shape_225 },
            { t: this.shape_224 },
            { t: this.shape_223 },
            { t: this.shape_222 },
            { t: this.shape_221 },
            { t: this.shape_220 },
            { t: this.shape_219 },
            { t: this.shape_218 },
            { t: this.shape_217 },
            { t: this.shape_216 },
            { t: this.shape_215 },
            { t: this.shape_214 },
            { t: this.shape_213 },
            { t: this.shape_212 },
            { t: this.shape_211 },
            { t: this.shape_210 },
            { t: this.shape_209 },
            { t: this.shape_208 },
            { t: this.shape_207 },
            { t: this.shape_206 },
            { t: this.shape_205 },
            { t: this.shape_204 },
            { t: this.shape_203 },
            { t: this.shape_202 },
            { t: this.shape_201 },
            { t: this.shape_200 },
            { t: this.shape_199 },
            { t: this.shape_198 },
            { t: this.shape_197 },
            { t: this.shape_196 },
            { t: this.shape_195 },
            { t: this.shape_194 },
            { t: this.shape_193 },
            { t: this.shape_192 },
            { t: this.shape_191 },
            { t: this.shape_190 },
            { t: this.shape_189 },
            { t: this.shape_188 },
            { t: this.shape_187 },
            { t: this.shape_186 },
            { t: this.shape_185 },
            { t: this.shape_184 },
            { t: this.shape_183 },
            { t: this.shape_182 },
            { t: this.shape_181 },
            { t: this.shape_180 },
            { t: this.shape_179 },
            { t: this.shape_178 },
            { t: this.shape_177 },
            { t: this.shape_176 },
            { t: this.shape_175 },
            { t: this.shape_174 },
            { t: this.shape_173 },
            { t: this.shape_172 },
            { t: this.shape_171 },
            { t: this.shape_170 },
            { t: this.shape_169 },
            { t: this.shape_168 },
            { t: this.shape_167 },
            { t: this.shape_166 },
            { t: this.shape_165 },
            { t: this.shape_164 },
            { t: this.shape_163 },
            { t: this.shape_162 },
            { t: this.shape_161 },
            { t: this.shape_160 },
            { t: this.shape_159 },
            { t: this.shape_158 },
            { t: this.shape_157 },
            { t: this.shape_156 },
            { t: this.shape_155 },
            { t: this.shape_154 },
            { t: this.shape_153 },
            { t: this.shape_152 },
            { t: this.shape_151 },
            { t: this.shape_150 },
            { t: this.shape_149 },
            { t: this.shape_148 },
            { t: this.shape_147 },
            { t: this.shape_146 },
            { t: this.shape_145 },
            { t: this.shape_144 },
            { t: this.shape_143 },
            { t: this.shape_142 },
            { t: this.shape_141 },
            { t: this.shape_140 },
            { t: this.shape_139 },
            { t: this.shape_138 },
            { t: this.shape_137 },
            { t: this.shape_136 },
            { t: this.shape_135 },
            { t: this.shape_134 },
            { t: this.shape_133 },
            { t: this.shape_132 },
            { t: this.shape_131 },
            { t: this.shape_130 },
            { t: this.shape_129 },
            { t: this.shape_128 },
            { t: this.shape_127 },
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.ClipGroup,
    new cjs.Rectangle(12.7, 24.1, 1197.6, 1197.6000000000001),
    null
  )
  ;(lib.Symbol23 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    
    // Layer_1
    this.instance = new lib.ClipGroup()
    this.instance.setTransform(
      771.8,
      756.45,
      1.2731,
      1.2731,
      0,
      0,
      0,
      618.9,
      618.1
    )
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol23,
    new cjs.Rectangle(-16.1, -30.5, 1575.6999999999998, 1574.4),
    null
  )
  ;(lib.Symbol20 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.instance = new lib.Symbol21()
    this.instance.setTransform(701, 250, 1, 1, 0, 0, 0, 701, 250)
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1))
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol20,
    new cjs.Rectangle(0, 0, 1402, 500),
    null
  )
  ;(lib.Symbol6copy = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // eyes
    this.instance = new lib.Symbol17()
    this.instance.setTransform(88.5, 38.95, 1, 1, 0, 0, 0, 36.1, 7.3)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ x: 87.65, y: 39.8 }, 0)
        .wait(1)
        .to({ x: 86.85, y: 40.7 }, 0)
        .wait(1)
        .to({ x: 86, y: 41.6 }, 0)
        .wait(1)
        .to({ x: 85.2, y: 42.5 }, 0)
        .wait(1)
        .to({ x: 84.4, y: 43.4 }, 0)
        .wait(1)
        .to({ x: 85.2, y: 42.9 }, 0)
        .wait(1)
        .to({ x: 86.05, y: 42.4 }, 0)
        .wait(1)
        .to({ x: 86.85, y: 41.9 }, 0)
        .wait(1)
        .to({ x: 87.7, y: 41.4 }, 0)
        .wait(1)
        .to({ x: 88.5, y: 40.9 }, 0)
        .wait(1)
        .to({ y: 40.4 }, 0)
        .wait(1)
        .to({ y: 39.9 }, 0)
        .wait(1)
        .to({ y: 39.4 }, 0)
        .wait(1)
        .to({ y: 38.95 }, 0)
        .wait(1)
    )
    // wing
    this.instance_1 = new lib.Symbol16()
    this.instance_1.setTransform(52.8, 92.35, 1, 1, 0, 0, 0, 52.8, 16.9)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ regX: 30.7, regY: 25.9, rotation: 1.9913, x: 30.4, y: 100.1 }, 0)
        .wait(1)
        .to({ rotation: 3.9826, x: 30.15, y: 98.85 }, 0)
        .wait(1)
        .to({ rotation: 5.974, x: 29.85, y: 97.6 }, 0)
        .wait(1)
        .to({ rotation: 2.7953, x: 30.25, y: 99.3 }, 0)
        .wait(1)
        .to({ rotation: -0.3834, x: 30.75, y: 101.05 }, 0)
        .wait(1)
        .to({ rotation: -3.5621, x: 31.35, y: 102.7 }, 0)
        .wait(1)
        .to({ rotation: -6.7408, x: 31.95, y: 104.35 }, 0)
        .wait(1)
        .to({ rotation: -1.3059, x: 30.95, y: 101.9 }, 0)
        .wait(1)
        .to({ rotation: 4.1291, x: 30.1, y: 99.4 }, 0)
        .wait(1)
        .to({ rotation: 9.564, x: 29.45, y: 96.8 }, 0)
        .wait(1)
        .to({ rotation: 14.9989, x: 29.1, y: 94.1 }, 0)
        .wait(1)
        .to({ rotation: 9.9993, x: 29.45, y: 96.6 }, 0)
        .wait(1)
        .to({ rotation: 4.9996, x: 30, y: 99 }, 0)
        .wait(1)
        .to({ rotation: 0, x: 30.7, y: 101.35 }, 0)
        .wait(1)
    )
    // Layer_1
    this.instance_2 = new lib.Symbol15()
    this.instance_2.setTransform(72.65, 66.75, 1, 1, 0, 0, 0, 66.1, 66.8)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ regY: 66.9, y: 66.4 }, 0)
        .wait(1)
        .to({ y: 65.95 }, 0)
        .wait(1)
        .to({ y: 65.45 }, 0)
        .wait(1)
        .to({ y: 66.05 }, 0)
        .wait(1)
        .to({ y: 66.6 }, 0)
        .wait(1)
        .to({ y: 67.1 }, 0)
        .wait(1)
        .to({ y: 67.7 }, 0)
        .wait(1)
        .to({ y: 67.05 }, 0)
        .wait(1)
        .to({ y: 66.45 }, 0)
        .wait(1)
        .to({ y: 65.8 }, 0)
        .wait(1)
        .to({ y: 65.15 }, 0)
        .wait(1)
        .to({ y: 65.7 }, 0)
        .wait(1)
        .to({ y: 66.3 }, 0)
        .wait(1)
        .to({ y: 66.85 }, 0)
        .wait(1)
    )
    // leg_R
    this.instance_3 = new lib.Symbol14()
    this.instance_3.setTransform(87.55, 141.8, 1, 1, 0, 0, 0, 15.2, 11.1)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ x: 87.2, y: 140.85 }, 0)
        .wait(1)
        .to({ x: 86.85, y: 139.9 }, 0)
        .wait(1)
        .to({ x: 86.5, y: 139 }, 0)
        .wait(1)
        .to({ x: 87, y: 140.4 }, 0)
        .wait(1)
        .to({ x: 87.55, y: 141.8 }, 0)
        .wait(1)
        .to({ x: 88.4, y: 140.05 }, 0)
        .wait(1)
        .to({ x: 89.3, y: 138.3 }, 0)
        .wait(1)
        .to({ x: 88.4, y: 140.05 }, 0)
        .wait(1)
        .to({ x: 87.55, y: 141.8 }, 0)
        .wait(1)
        .to({ x: 88.6, y: 140.4 }, 0)
        .wait(1)
        .to({ x: 89.65, y: 139 }, 0)
        .wait(1)
        .to({ x: 88.95, y: 139.9 }, 0)
        .wait(1)
        .to({ x: 88.25, y: 140.85 }, 0)
        .wait(1)
        .to({ x: 87.55, y: 141.8 }, 0)
        .wait(1)
    )
    // leg_L
    this.instance_4 = new lib.Symbol13()
    this.instance_4.setTransform(49, 141.15, 1, 1, 0, 0, 0, 12.5, 11.8)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(4)
        .to({ x: 50.05, y: 139.75 }, 0)
        .wait(1)
        .to({ x: 51.1, y: 138.35 }, 0)
        .wait(1)
        .to({ x: 50.05, y: 139.75 }, 0)
        .wait(1)
        .to({ x: 49, y: 141.15 }, 0)
        .wait(1)
        .to({ x: 50.4, y: 140.25 }, 0)
        .wait(1)
        .to({ x: 51.8, y: 139.4 }, 0)
        .wait(1)
        .to({ x: 50.4, y: 140.25 }, 0)
        .wait(1)
        .to({ x: 49, y: 141.15 }, 0)
        .wait(4)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.5, -1.7, 139.3, 154.7)
  ;(lib.Symbol6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // eyes
    this.instance = new lib.Symbol12()
    this.instance.setTransform(88.5, 38.95, 1, 1, 0, 0, 0, 36.1, 7.3)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(1)
        .to({ x: 87.9, y: 39.55 }, 0)
        .wait(1)
        .to({ x: 87.3, y: 40.2 }, 0)
        .wait(1)
        .to({ x: 86.7, y: 40.85 }, 0)
        .wait(1)
        .to({ x: 86.15, y: 41.5 }, 0)
        .wait(1)
        .to({ x: 85.55, y: 42.15 }, 0)
        .wait(1)
        .to({ x: 84.95, y: 42.8 }, 0)
        .wait(1)
        .to({ x: 84.4, y: 43.45 }, 0)
        .wait(1)
        .to({ x: 85.05, y: 43.95 }, 0)
        .wait(1)
        .to({ x: 85.75, y: 44.45 }, 0)
        .wait(1)
        .to({ x: 86.45, y: 44.95 }, 0)
        .wait(1)
        .to({ x: 87.1, y: 45.45 }, 0)
        .wait(1)
        .to({ x: 87.8, y: 45.95 }, 0)
        .wait(1)
        .to({ x: 88.5, y: 46.45 }, 0)
        .wait(1)
        .to({ x: 89.2, y: 46.95 }, 0)
        .wait(1)
        .to({ x: 89.85, y: 47.45 }, 0)
        .wait(1)
        .to({ x: 90.55, y: 47.95 }, 0)
        .wait(1)
        .to({ x: 90.1, y: 47.25 }, 0)
        .wait(1)
        .to({ x: 89.7, y: 46.55 }, 0)
        .wait(1)
        .to({ x: 89.25, y: 45.85 }, 0)
        .wait(1)
        .to({ x: 88.85, y: 45.15 }, 0)
        .wait(1)
        .to({ x: 88.4, y: 44.45 }, 0)
        .wait(1)
        .to({ x: 87.95, y: 43.8 }, 0)
        .wait(1)
        .to({ x: 87.55, y: 43.1 }, 0)
        .wait(1)
        .to({ x: 87.7, y: 42.4 }, 0)
        .wait(1)
        .to({ x: 87.85, y: 41.7 }, 0)
        .wait(1)
        .to({ x: 88, y: 41 }, 0)
        .wait(1)
        .to({ x: 88.15, y: 40.3 }, 0)
        .wait(1)
        .to({ x: 88.3, y: 39.6 }, 0)
        .wait(1)
        .to({ x: 88.5, y: 38.95 }, 0)
        .wait(1)
    )
    // wing
    this.instance_1 = new lib.Symbol11()
    this.instance_1.setTransform(55, 95.75, 1, 1, 0, 0, 0, 55, 20.3)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(1)
        .to({ regX: 30.7, regY: 25.9, rotation: 0.5475, x: 30.6, y: 101.1 }, 0)
        .wait(1)
        .to({ rotation: 1.0949, x: 30.55, y: 100.9 }, 0)
        .wait(1)
        .to({ rotation: 1.6424, y: 100.65 }, 0)
        .wait(1)
        .to({ rotation: 2.1899, x: 30.5, y: 100.4 }, 0)
        .wait(1)
        .to({ rotation: 2.7374, x: 30.4, y: 100.1 }, 0)
        .wait(1)
        .to({ rotation: 3.2848, y: 99.9 }, 0)
        .wait(1)
        .to({ rotation: 3.8323, x: 30.35, y: 99.7 }, 0)
        .wait(1)
        .to({ rotation: 4.3798, x: 30.3, y: 99.45 }, 0)
        .wait(1)
        .to({ rotation: 4.9273, y: 99.25 }, 0)
        .wait(1)
        .to({ rotation: 5.4747, x: 30.25, y: 99 }, 0)
        .wait(1)
        .to({ rotation: 6.0222, y: 98.7 }, 0)
        .wait(1)
        .to({ rotation: 6.5697, x: 30.2, y: 98.5 }, 0)
        .wait(1)
        .to({ rotation: 7.1172, x: 30.15, y: 98.25 }, 0)
        .wait(1)
        .to({ rotation: 7.6646, y: 98 }, 0)
        .wait(1)
        .to({ rotation: 8.2121, y: 97.85 }, 0)
        .wait(1)
        .to({ rotation: 7.6255, y: 98 }, 0)
        .wait(1)
        .to({ rotation: 7.0389, y: 98.3 }, 0)
        .wait(1)
        .to({ rotation: 6.4524, x: 30.2, y: 98.55 }, 0)
        .wait(1)
        .to({ rotation: 5.8658, x: 30.25, y: 98.8 }, 0)
        .wait(1)
        .to({ rotation: 5.2792, x: 30.2, y: 99.05 }, 0)
        .wait(1)
        .to({ rotation: 4.6926, x: 30.3, y: 99.3 }, 0)
        .wait(1)
        .to({ rotation: 4.1061, y: 99.6 }, 0)
        .wait(1)
        .to({ rotation: 3.5195, x: 30.35, y: 99.85 }, 0)
        .wait(1)
        .to({ rotation: 2.9329, x: 30.4, y: 100.05 }, 0)
        .wait(1)
        .to({ rotation: 2.3463, x: 30.45, y: 100.35 }, 0)
        .wait(1)
        .to({ rotation: 1.7597, x: 30.5, y: 100.6 }, 0)
        .wait(1)
        .to({ rotation: 1.1732, x: 30.55, y: 100.85 }, 0)
        .wait(1)
        .to({ rotation: 0.5866, x: 30.65, y: 101.05 }, 0)
        .wait(1)
        .to({ rotation: 0, x: 30.7, y: 101.35 }, 0)
        .wait(1)
    )
    // Layer_1
    this.instance_2 = new lib.Symbol10()
    this.instance_2.setTransform(72.65, 66.75, 1, 1, 0, 0, 0, 66.1, 66.8)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(1)
        .to({ regY: 66.9, y: 67.05 }, 0)
        .wait(1)
        .to({ y: 67.3 }, 0)
        .wait(1)
        .to({ y: 67.55 }, 0)
        .wait(1)
        .to({ y: 67.75 }, 0)
        .wait(1)
        .to({ y: 68 }, 0)
        .wait(1)
        .to({ y: 68.25 }, 0)
        .wait(1)
        .to({ y: 68.45 }, 0)
        .wait(1)
        .to({ y: 68.7 }, 0)
        .wait(1)
        .to({ y: 68.95 }, 0)
        .wait(1)
        .to({ y: 69.15 }, 0)
        .wait(1)
        .to({ y: 69.4 }, 0)
        .wait(1)
        .to({ y: 69.65 }, 0)
        .wait(1)
        .to({ y: 69.85 }, 0)
        .wait(1)
        .to({ y: 70.1 }, 0)
        .wait(1)
        .to({ y: 70.35 }, 0)
        .wait(1)
        .to({ y: 70.1 }, 0)
        .wait(1)
        .to({ y: 69.85 }, 0)
        .wait(1)
        .to({ y: 69.6 }, 0)
        .wait(1)
        .to({ y: 69.35 }, 0)
        .wait(1)
        .to({ y: 69.1 }, 0)
        .wait(1)
        .to({ y: 68.85 }, 0)
        .wait(1)
        .to({ y: 68.6 }, 0)
        .wait(1)
        .to({ y: 68.35 }, 0)
        .wait(1)
        .to({ y: 68.1 }, 0)
        .wait(1)
        .to({ y: 67.85 }, 0)
        .wait(1)
        .to({ y: 67.6 }, 0)
        .wait(1)
        .to({ y: 67.35 }, 0)
        .wait(1)
        .to({ y: 67.1 }, 0)
        .wait(1)
        .to({ y: 66.85 }, 0)
        .wait(1)
    )
    // leg_R
    this.instance_3 = new lib.Symbol9()
    this.instance_3.setTransform(87.55, 141.8, 1, 1, 0, 0, 0, 15.2, 11.1)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(1)
        .to({ x: 87.4, y: 141.5 }, 0)
        .wait(1)
        .to({ x: 87.3, y: 141.25 }, 0)
        .wait(1)
        .to({ x: 87.2, y: 140.95 }, 0)
        .wait(1)
        .to({ x: 87.05, y: 140.7 }, 0)
        .wait(1)
        .to({ x: 86.95, y: 140.4 }, 0)
        .wait(1)
        .to({ x: 86.85, y: 140.15 }, 0)
        .wait(1)
        .to({ x: 86.7, y: 139.85 }, 0)
        .wait(1)
        .to({ x: 86.6, y: 139.6 }, 0)
        .wait(1)
        .to({ x: 86.5, y: 139.35 }, 0)
        .wait(1)
        .to({ x: 86.6, y: 139.65 }, 0)
        .wait(1)
        .to({ x: 86.75, y: 139.95 }, 0)
        .wait(1)
        .to({ x: 86.85, y: 140.25 }, 0)
        .wait(1)
        .to({ x: 87, y: 140.55 }, 0)
        .wait(1)
        .to({ x: 87.15, y: 140.85 }, 0)
        .wait(1)
        .to({ x: 87.25, y: 141.15 }, 0)
        .wait(1)
        .to({ x: 87.4, y: 141.45 }, 0)
        .wait(1)
        .to({ x: 87.55, y: 141.8 }, 0)
        .wait(13)
    )
    // leg_L
    this.instance_4 = new lib.Symbol8()
    this.instance_4.setTransform(49, 141.15, 1, 1, 0, 0, 0, 12.5, 11.8)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(16)
        .to({ x: 49.1, y: 140.95 }, 0)
        .wait(1)
        .to({ x: 49.2, y: 140.75 }, 0)
        .wait(1)
        .to({ x: 49.3, y: 140.55 }, 0)
        .wait(1)
        .to({ x: 49.4, y: 140.35 }, 0)
        .wait(1)
        .to({ x: 49.5, y: 140.15 }, 0)
        .wait(1)
        .to({ x: 49.6, y: 139.95 }, 0)
        .wait(1)
        .to({ x: 49.7, y: 139.75 }, 0)
        .wait(1)
        .to({ x: 49.6, y: 139.95 }, 0)
        .wait(1)
        .to({ x: 49.5, y: 140.15 }, 0)
        .wait(1)
        .to({ x: 49.4, y: 140.35 }, 0)
        .wait(1)
        .to({ x: 49.3, y: 140.55 }, 0)
        .wait(1)
        .to({ x: 49.2, y: 140.75 }, 0)
        .wait(1)
        .to({ x: 49.1, y: 140.95 }, 0)
        .wait(1)
        .to({ x: 49, y: 141.15 }, 0)
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-0.1, 0, 138.9, 153)
  ;(lib.Symbol3copy4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_32 = function () {
      this.stop()
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(32)
        .call(this.frame_32)
        .wait(3)
    )
    // Layer_5
    this.instance = new lib.Symbol4()
    this.instance.setTransform(72, 72, 0.1429, 1, 0, 0, 180, 65.5, 72)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 72, scaleX: 0.2857, x: 70.65 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 70.2 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714, x: 69.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 69.3 }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 68.9 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 68.45 }, 0)
        .wait(11)
    )
    // Layer_7
    this.text = new cjs.Text('x19', "bold 23px 'Arial'", '#FFFFFF')
    this.text.lineHeight = 28
    this.text.parent = this
    this.text.setTransform(51.85, 59.8)
    this.timeline.addTween(
      cjs.Tween.get(this.text)
        .wait(11)
        .to({ scaleX: 0.8528, x: 54.6162 }, 0)
        .wait(1)
        .to({ scaleX: 0.7056, x: 57.3825 }, 0)
        .wait(1)
        .to({ scaleX: 0.5584, x: 60.1487 }, 0)
        .wait(1)
        .to({ scaleX: 0.4113, x: 62.915 }, 0)
        .wait(1)
        .to({ scaleX: 0.2641, x: 65.6812 }, 0)
        .wait(1)
        .to({ scaleX: 0.1169, x: 68.4474 }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    )
    // Layer_1
    this.instance_1 = new lib.Blue()
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(72, 72, 1, 1, 0, 0, 0, 72, 72)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 10)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(10)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.2857 }, 0)
        .wait(1)
        .to({ scaleX: 0.1429, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0, scaleY: 0, x: -72 }, 0)
        .wait(1)
        .to({ x: -72.25 }, 0)
        .wait(1)
        .to({ x: -72.55 }, 0)
        .wait(1)
        .to({ x: -72.85 }, 0)
        .wait(1)
        .to({ x: -73.1 }, 0)
        .wait(1)
        .to({ x: -73.4 }, 0)
        .wait(1)
        .to({ x: -73.7 }, 0)
        .wait(1)
        .to({ x: -74 }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-3.5, 0, 147.5, 144)
  ;(lib.Symbol3copy3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_32 = function () {
      this.stop()
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(32)
        .call(this.frame_32)
        .wait(3)
    )
    // Layer_5
    this.instance = new lib.Symbol4()
    this.instance.setTransform(72, 72, 0.1429, 1, 0, 0, 180, 65.8, 72)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 72, scaleX: 0.2857, x: 70.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 70.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714, x: 69.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 69.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 69.2 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 68.8 }, 0)
        .wait(11)
    )
    // Layer_7
    this.text = new cjs.Text('x10.57', "bold 23px 'Arial'", '#FFFFFF')
    this.text.lineHeight = 28
    this.text.parent = this
    this.text.setTransform(36.65, 59.8)
    this.timeline.addTween(
      cjs.Tween.get(this.text)
        .wait(11)
        .to({ scaleX: 0.8528, x: 41.8162 }, 0)
        .wait(1)
        .to({ scaleX: 0.7056, x: 46.9825 }, 0)
        .wait(1)
        .to({ scaleX: 0.5584, x: 52.1487 }, 0)
        .wait(1)
        .to({ scaleX: 0.4113, x: 57.315 }, 0)
        .wait(1)
        .to({ scaleX: 0.2641, x: 62.4812 }, 0)
        .wait(1)
        .to({ scaleX: 0.1169, x: 67.6474 }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    )
    // Layer_1
    this.instance_1 = new lib.Blue()
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(72, 72, 1, 1, 0, 0, 0, 72, 72)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 10)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(10)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.2857 }, 0)
        .wait(1)
        .to({ scaleX: 0.1429, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0, scaleY: 0, x: -72 }, 0)
        .wait(1)
        .to({ x: -72.25 }, 0)
        .wait(1)
        .to({ x: -72.55 }, 0)
        .wait(1)
        .to({ x: -72.85 }, 0)
        .wait(1)
        .to({ x: -73.1 }, 0)
        .wait(1)
        .to({ x: -73.4 }, 0)
        .wait(1)
        .to({ x: -73.7 }, 0)
        .wait(1)
        .to({ x: -74 }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-3.2, 0, 147.2, 144)
  ;(lib.Symbol3copy2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_32 = function () {
      this.stop()
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(32)
        .call(this.frame_32)
        .wait(3)
    )
    // Layer_5
    this.instance = new lib.Symbol4()
    this.instance.setTransform(72, 72, 0.1429, 1, 0, 0, 180, 65.8, 72)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 72, scaleX: 0.2857, x: 70.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 70.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714, x: 69.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 69.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 69.2 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 68.8 }, 0)
        .wait(11)
    )
    // Layer_7
    this.text = new cjs.Text('x7.99', "bold 23px 'Arial'", '#FFFFFF')
    this.text.lineHeight = 28
    this.text.parent = this
    this.text.setTransform(42.65, 59.8)
    this.timeline.addTween(
      cjs.Tween.get(this.text)
        .wait(11)
        .to({ scaleX: 0.8528, x: 46.8816 }, 0)
        .wait(1)
        .to({ scaleX: 0.7056, x: 51.1132 }, 0)
        .wait(1)
        .to({ scaleX: 0.5584, x: 55.3448 }, 0)
        .wait(1)
        .to({ scaleX: 0.4113, x: 59.5764 }, 0)
        .wait(1)
        .to({ scaleX: 0.2641, x: 63.808 }, 0)
        .wait(1)
        .to({ scaleX: 0.1169, x: 68.0396 }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    )
    // Layer_1
    this.instance_1 = new lib.Blue()
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(72, 72, 1, 1, 0, 0, 0, 72, 72)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 10)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(10)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.2857 }, 0)
        .wait(1)
        .to({ scaleX: 0.1429, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0, scaleY: 0, x: -72 }, 0)
        .wait(1)
        .to({ x: -72.25 }, 0)
        .wait(1)
        .to({ x: -72.55 }, 0)
        .wait(1)
        .to({ x: -72.85 }, 0)
        .wait(1)
        .to({ x: -73.1 }, 0)
        .wait(1)
        .to({ x: -73.4 }, 0)
        .wait(1)
        .to({ x: -73.7 }, 0)
        .wait(1)
        .to({ x: -74 }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-3.2, 0, 147.2, 144)
  ;(lib.Symbol3copy = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_32 = function () {
      this.stop()
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(32)
        .call(this.frame_32)
        .wait(3)
    )
    // Layer_5
    this.instance = new lib.Symbol4()
    this.instance.setTransform(72, 72, 0.1429, 1, 0, 0, 180, 65.8, 72)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 72, scaleX: 0.2857, x: 70.75 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 70.35 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714, x: 69.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 69.55 }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 69.2 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 68.8 }, 0)
        .wait(11)
    )
    // Layer_7
    this.text = new cjs.Text('x3.45', "bold 23px 'Arial'", '#FFFFFF')
    this.text.lineHeight = 28
    this.text.parent = this
    this.text.setTransform(42.65, 59.8)
    this.timeline.addTween(
      cjs.Tween.get(this.text)
        .wait(11)
        .to({ scaleX: 0.8528, x: 46.8816 }, 0)
        .wait(1)
        .to({ scaleX: 0.7056, x: 51.1132 }, 0)
        .wait(1)
        .to({ scaleX: 0.5584, x: 55.3448 }, 0)
        .wait(1)
        .to({ scaleX: 0.4113, x: 59.5764 }, 0)
        .wait(1)
        .to({ scaleX: 0.2641, x: 63.808 }, 0)
        .wait(1)
        .to({ scaleX: 0.1169, x: 68.0396 }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    )
    // Layer_1
    this.instance_1 = new lib.Blue()
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(72, 72, 1, 1, 0, 0, 0, 72, 72)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 10)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(10)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.2857 }, 0)
        .wait(1)
        .to({ scaleX: 0.1429, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0, scaleY: 0, x: -72 }, 0)
        .wait(1)
        .to({ x: -72.25 }, 0)
        .wait(1)
        .to({ x: -72.55 }, 0)
        .wait(1)
        .to({ x: -72.85 }, 0)
        .wait(1)
        .to({ x: -73.1 }, 0)
        .wait(1)
        .to({ x: -73.4 }, 0)
        .wait(1)
        .to({ x: -73.7 }, 0)
        .wait(1)
        .to({ x: -74 }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-3.2, 0, 147.2, 144)
  ;(lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_32 = function () {
      this.stop()
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(32)
        .call(this.frame_32)
        .wait(3)
    )
    // Layer_5
    this.instance = new lib.Symbol4()
    this.instance.setTransform(72, 72, 0.1429, 1, 0, 0, 180, 66.2, 72)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(18)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 72, scaleX: 0.2857, x: 70.85 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 70.5 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714, x: 70.15 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 69.8 }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 69.5 }, 0)
        .wait(1)
        .to({ scaleX: 1, x: 69.15 }, 0)
        .wait(11)
    )
    // Layer_7
    this.text = new cjs.Text('x1.86', "bold 23px 'Arial'", '#FFFFFF')
    this.text.lineHeight = 28
    this.text.parent = this
    this.text.setTransform(42.65, 59.8)
    this.timeline.addTween(
      cjs.Tween.get(this.text)
        .wait(11)
        .to({ scaleX: 0.8528, x: 46.8816 }, 0)
        .wait(1)
        .to({ scaleX: 0.7056, x: 51.1132 }, 0)
        .wait(1)
        .to({ scaleX: 0.5584, x: 55.3448 }, 0)
        .wait(1)
        .to({ scaleX: 0.4113, x: 59.5764 }, 0)
        .wait(1)
        .to({ scaleX: 0.2641, x: 63.808 }, 0)
        .wait(1)
        .to({ scaleX: 0.1169, x: 68.0396 }, 0)
        .to({ _off: true }, 1)
        .wait(18)
    )
    // Layer_1
    this.instance_1 = new lib.Blue()
    this.instance_2 = new lib.Symbol5()
    this.instance_2.setTransform(72, 72, 1, 1, 0, 0, 0, 72, 72)
    this.instance_2._off = true
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance_1 }] })
        .to({ state: [{ t: this.instance_2 }] }, 10)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [{ t: this.instance_2 }] }, 1)
        .to({ state: [] }, 1)
        .wait(10)
    )
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(10)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ scaleX: 0.8571, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.7143, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0.5714 }, 0)
        .wait(1)
        .to({ scaleX: 0.4286, x: 71.95 }, 0)
        .wait(1)
        .to({ scaleX: 0.2857 }, 0)
        .wait(1)
        .to({ scaleX: 0.1429, x: 72 }, 0)
        .wait(1)
        .to({ scaleX: 0, scaleY: 0, x: -72 }, 0)
        .wait(1)
        .to({ x: -72.25 }, 0)
        .wait(1)
        .to({ x: -72.55 }, 0)
        .wait(1)
        .to({ x: -72.85 }, 0)
        .wait(1)
        .to({ x: -73.1 }, 0)
        .wait(1)
        .to({ x: -73.4 }, 0)
        .wait(1)
        .to({ x: -73.7 }, 0)
        .wait(1)
        .to({ x: -74 }, 0)
        .to({ _off: true }, 1)
        .wait(10)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(-2.8, 0, 146.8, 144)
  ;(lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_0 = function () {
      this.stop()
    }
    this.frame_38 = function () {
      this.gotoAndPlay(10)
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .call(this.frame_0)
        .wait(38)
        .call(this.frame_38)
        .wait(1)
    )
    // Layer_1
    this.instance = new lib.Symbol2()
    this.instance.setTransform(151, 165, 1, 1, 0, 0, 0, 151, 165)
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(10)
        .to({ y: 166.1 }, 0)
        .wait(1)
        .to({ y: 167.25 }, 0)
        .wait(1)
        .to({ y: 168.4 }, 0)
        .wait(1)
        .to({ y: 169.55 }, 0)
        .wait(1)
        .to({ y: 170.7 }, 0)
        .wait(1)
        .to({ y: 171.85 }, 0)
        .wait(1)
        .to({ y: 173 }, 0)
        .wait(1)
        .to({ y: 174.1 }, 0)
        .wait(1)
        .to({ y: 175.25 }, 0)
        .wait(1)
        .to({ y: 176.4 }, 0)
        .wait(1)
        .to({ y: 177.55 }, 0)
        .wait(1)
        .to({ y: 178.7 }, 0)
        .wait(1)
        .to({ y: 179.85 }, 0)
        .wait(1)
        .to({ y: 181 }, 0)
        .wait(1)
        .to({ y: 179.9 }, 0)
        .wait(1)
        .to({ y: 178.85 }, 0)
        .wait(1)
        .to({ y: 177.8 }, 0)
        .wait(1)
        .to({ y: 176.7 }, 0)
        .wait(1)
        .to({ y: 175.65 }, 0)
        .wait(1)
        .to({ y: 174.6 }, 0)
        .wait(1)
        .to({ y: 173.5 }, 0)
        .wait(1)
        .to({ y: 172.45 }, 0)
        .wait(1)
        .to({ y: 171.4 }, 0)
        .wait(1)
        .to({ y: 170.3 }, 0)
        .wait(1)
        .to({ y: 169.25 }, 0)
        .wait(1)
        .to({ y: 168.2 }, 0)
        .wait(1)
        .to({ y: 167.1 }, 0)
        .wait(1)
        .to({ y: 166.05 }, 0)
        .wait(1)
        .to({ y: 165 }, 0)
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(0, 0, 302, 346)
  ;(lib.Symbol22 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // Layer_1
    this.coin5 = new lib.Symbol3copy4()
    this.coin5.name = 'coin5'
    this.coin5.setTransform(873.15, 72, 1, 1, 0, 0, 0, 72, 72)
    this.coin4 = new lib.Symbol3copy3()
    this.coin4.name = 'coin4'
    this.coin4.setTransform(672.95, 72, 1, 1, 0, 0, 0, 72, 72)
    this.coin3 = new lib.Symbol3copy2()
    this.coin3.name = 'coin3'
    this.coin3.setTransform(474.1, 72, 1, 1, 0, 0, 0, 72, 72)
    this.coin2 = new lib.Symbol3copy()
    this.coin2.name = 'coin2'
    this.coin2.setTransform(271.1, 72, 1, 1, 0, 0, 0, 72, 72)
    this.coin1 = new lib.Symbol3()
    this.coin1.name = 'coin1'
    this.coin1.setTransform(73, 72, 1, 1, 0, 0, 0, 72, 72)
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f('#232739')
      .s()
      .p(
        'Am6G7Qi4i3AAkEQAAkDC4i3QC3i4EDAAQEEAAC3C4QC4C3AAEDQAAEEi4C3Qi3C4kEAAQkDAAi3i4g'
      )
    this.shape.setTransform(873.125, 72.025)
    this.shape_1 = new cjs.Shape()
    this.shape_1.graphics
      .f('#303550')
      .s()
      .p(
        'AkYKXQiAg2hkhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iCBkhjQBkhkCAg2QCGg5CSAAQCSAACGA5QCCA3BjBjQBjBjA3CCQA5CGAACRQAACTg5CGQg3CAhjBkQjTDTkqAAQiSAAiGg5g'
      )
    this.shape_1.setTransform(873.15, 72)
    this.shape_2 = new cjs.Shape()
    this.shape_2.graphics
      .f('#232739')
      .s()
      .p(
        'Am6G7Qi4i3AAkEQAAkDC4i3QC3i4EDAAQEEAAC3C4QC4C3AAEDQAAEEi4C3Qi3C4kEAAQkDAAi3i4g'
      )
    this.shape_2.setTransform(672.925, 72.025)
    this.shape_3 = new cjs.Shape()
    this.shape_3.graphics
      .f('#303550')
      .s()
      .p(
        'AkYKXQiAg2hkhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iCBkhjQBkhkCAg2QCGg5CSAAQCSAACGA5QCCA3BjBjQBjBjA3CCQA5CGAACRQAACTg5CGQg3CAhjBkQjTDTkqAAQiSAAiGg5g'
      )
    this.shape_3.setTransform(672.95, 72)
    this.shape_4 = new cjs.Shape()
    this.shape_4.graphics
      .f('#232739')
      .s()
      .p(
        'Am6G7Qi4i3AAkEQAAkDC4i3QC3i4EDAAQEEAAC3C4QC4C3AAEDQAAEEi4C3Qi3C4kEAAQkDAAi3i4g'
      )
    this.shape_4.setTransform(472.925, 72.025)
    this.shape_5 = new cjs.Shape()
    this.shape_5.graphics
      .f('#303550')
      .s()
      .p(
        'AkYKXQiAg2hkhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iCBkhjQBkhkCAg2QCGg5CSAAQCSAACGA5QCCA3BjBjQBjBjA3CCQA5CGAACRQAACTg5CGQg3CAhjBkQjTDTkqAAQiSAAiGg5g'
      )
    this.shape_5.setTransform(472.95, 72)
    this.shape_6 = new cjs.Shape()
    this.shape_6.graphics
      .f('#232739')
      .s()
      .p(
        'Am6G7Qi4i3AAkEQAAkDC4i3QC3i4EDAAQEEAAC3C4QC4C3AAEDQAAEEi4C3Qi3C4kEAAQkDAAi3i4g'
      )
    this.shape_6.setTransform(269.925, 72.025)
    this.shape_7 = new cjs.Shape()
    this.shape_7.graphics
      .f('#303550')
      .s()
      .p(
        'AkYKXQiAg2hkhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iCBkhjQBkhkCAg2QCGg5CSAAQCSAACGA5QCCA3BjBjQBjBjA3CCQA5CGAACRQAACTg5CGQg3CAhjBkQjTDTkqAAQiSAAiGg5g'
      )
    this.shape_7.setTransform(269.95, 72)
    this.shape_8 = new cjs.Shape()
    this.shape_8.graphics
      .f('#232739')
      .s()
      .p(
        'Am6G7Qi4i3AAkEQAAkDC4i3QC3i4EDAAQEEAAC3C4QC4C3AAEDQAAEEi4C3Qi3C4kEAAQkDAAi3i4g'
      )
    this.shape_8.setTransform(71.975, 72.025)
    this.shape_9 = new cjs.Shape()
    this.shape_9.graphics
      .f('#303550')
      .s()
      .p(
        'AkYKXQiAg2hkhkQhkhkg2iAQg5iGAAiTQAAiRA5iGQA2iCBkhjQBkhkCAg2QCGg5CSAAQCSAACGA5QCCA3BjBjQBjBjA3CCQA5CGAACRQAACTg5CGQg3CAhjBkQjTDTkqAAQiSAAiGg5g'
      )
    this.shape_9.setTransform(72, 72)
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.coin1 },
            { t: this.coin2 },
            { t: this.coin3 },
            { t: this.coin4 },
            { t: this.coin5 },
          ],
        })
        .wait(1)
    )
    this._renderFirstFrame()
  }).prototype = getMCSymbolPrototype(
    lib.Symbol22,
    new cjs.Rectangle(0, 0, 945.2, 144),
    null
  )
  ;(lib.Symbol7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    // timeline functions:
    this.frame_29 = function () {
      this.gotoAndPlay(0)
    }
    this.frame_43 = function () {
      this.coins.coin1.gotoAndPlay(5)
      cashBtn.classList.remove('disabled')
      goBtn.classList.remove('disabled')
    }
    this.frame_69 = function () {
      this.stop()
    }
    this.frame_87 = function () {
      this.coins.coin2.gotoAndPlay(5)
      goBtn.classList.remove('disabled')
    }
    this.frame_117 = function () {
      this.stop()
    }
    this.frame_131 = function () {
      this.coins.coin3.gotoAndPlay(5)
      goBtn.classList.remove('disabled')
    }
    this.frame_161 = function () {
      this.stop()
      goBtn.classList.remove('disabled')
    }
    this.frame_175 = function () {
      this.coins.coin4.gotoAndPlay(5)
      goBtn.classList.remove('disabled')
    }
    this.frame_205 = function () {
      this.stop()
      goBtn.classList.remove('disabled')
    }
    this.frame_219 = function () {
      this.coins.coin5.gotoAndPlay(5)
      goBtn.classList.remove('disabled')
    }
    this.frame_249 = function () {
      this.stop()
    }
    this.frame_263 = function () {
      this.egg.gotoAndPlay(5)
    }
    this.frame_284 = function () {
      //   this.showPopup()
      popup2.classList.add('popup__show')
      popupWindow2.classList.add('popup__window_show')
      return
    }
    this.frame_353 = function () {
      this.gotoAndPlay(325)
    }
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this)
        .wait(29)
        .call(this.frame_29)
        .wait(14)
        .call(this.frame_43)
        .wait(26)
        .call(this.frame_69)
        .wait(18)
        .call(this.frame_87)
        .wait(30)
        .call(this.frame_117)
        .wait(14)
        .call(this.frame_131)
        .wait(30)
        .call(this.frame_161)
        .wait(14)
        .call(this.frame_175)
        .wait(30)
        .call(this.frame_205)
        .wait(14)
        .call(this.frame_219)
        .wait(30)
        .call(this.frame_249)
        .wait(14)
        .call(this.frame_263)
        .wait(21)
        .call(this.frame_284)
        .wait(69)
        .call(this.frame_353)
        .wait(15)
    )
    // Layer_1
    this.instance = new lib.Symbol23()
    this.instance.setTransform(485.45, -1111, 1, 1, 0, 0, 0, 771.7, 756.6)
    this.instance._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(264)
        .to({ _off: false }, 0)
        .wait(1)
        .to(
          {
            regX: 762.3,
            regY: 762.6,
            scaleX: 1.0046,
            scaleY: 1.0046,
            x: 476,
            y: -1066.5,
          },
          0
        )
        .wait(1)
        .to({ scaleX: 1.0091, scaleY: 1.0091, y: -1027.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0137, scaleY: 1.0137, x: 475.95, y: -989.45 }, 0)
        .wait(1)
        .to({ scaleX: 1.0182, scaleY: 1.0182, x: 475.9, y: -951 }, 0)
        .wait(1)
        .to({ scaleX: 1.0228, scaleY: 1.0228, x: 475.85, y: -912.45 }, 0)
        .wait(1)
        .to({ scaleX: 1.0273, scaleY: 1.0273, x: 475.8, y: -873.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.0319, scaleY: 1.0319, y: -835.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.0364, scaleY: 1.0364, x: 475.75, y: -796.95 }, 0)
        .wait(1)
        .to({ scaleX: 1.041, scaleY: 1.041, x: 475.65, y: -758.45 }, 0)
        .wait(1)
        .to({ scaleX: 1.0455, scaleY: 1.0455, y: -719.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0501, scaleY: 1.0501, x: 475.6, y: -681.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.0546, scaleY: 1.0546, x: 475.55, y: -642.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0592, scaleY: 1.0592, x: 475.5, y: -604.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.0637, scaleY: 1.0637, x: 475.45, y: -565.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0683, scaleY: 1.0683, y: -527.4 }, 0)
        .wait(1)
        .to({ scaleX: 1.0728, scaleY: 1.0728, x: 475.4, y: -488.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.0774, scaleY: 1.0774, x: 475.35, y: -450.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.0819, scaleY: 1.0819, x: 475.3, y: -411.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0865, scaleY: 1.0865, x: 475.25, y: -373.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.091, scaleY: 1.091, x: 475.2, y: -334.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.0956, scaleY: 1.0956, y: -296.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.1001, scaleY: 1.1001, x: 475.1, y: -257.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.1047, scaleY: 1.1047, y: -219.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.1092, scaleY: 1.1092, x: 475.05, y: -180.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.1138, scaleY: 1.1138, x: 475, y: -142.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.1183, scaleY: 1.1183, x: 474.95, y: -103.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.1229, scaleY: 1.1229, x: 474.9, y: -65.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.1274, scaleY: 1.1274, y: -26.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.132, scaleY: 1.132, x: 474.85, y: 11.75 }, 0)
        .wait(1)
        .to({ scaleX: 1.1365, scaleY: 1.1365, x: 474.8, y: 50.2 }, 0)
        .wait(1)
        .to({ scaleX: 1.1411, scaleY: 1.1411, x: 474.7, y: 88.7 }, 0)
        .wait(1)
        .to({ scaleX: 1.1456, scaleY: 1.1456, y: 127.25 }, 0)
        .wait(1)
        .to({ scaleX: 1.1502, scaleY: 1.1502, x: 474.65, y: 165.75 }, 0)
        .wait(1)
        .to({ scaleX: 1.1547, scaleY: 1.1547, y: 204.25 }, 0)
        .wait(1)
        .to({ scaleX: 1.1593, scaleY: 1.1593, x: 474.55, y: 242.75 }, 0)
        .wait(1)
        .to({ scaleX: 1.1638, scaleY: 1.1638, x: 474.5, y: 281.25 }, 0)
        .wait(1)
        .to({ scaleX: 1.1684, scaleY: 1.1684, y: 319.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.1729, scaleY: 1.1729, x: 474.45, y: 358.25 }, 0)
        .wait(1)
        .to({ scaleX: 1.1775, scaleY: 1.1775, x: 474.4, y: 396.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.182, scaleY: 1.182, x: 474.35, y: 435.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.1866, scaleY: 1.1866, x: 474.3, y: 473.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.1911, scaleY: 1.1911, y: 512.3 }, 0)
        .wait(1)
        .to({ scaleX: 1.1957, scaleY: 1.1957, x: 474.25, y: 550.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.2002, scaleY: 1.2002, x: 474.15, y: 589.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2048, scaleY: 1.2048, y: 627.8 }, 0)
        .wait(1)
        .to({ scaleX: 1.2093, scaleY: 1.2093, x: 474.1, y: 666.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2139, scaleY: 1.2139, y: 704.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.2184, scaleY: 1.2184, x: 474, y: 743.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.223, scaleY: 1.223, x: 473.95, y: 781.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.2275, scaleY: 1.2275, y: 820.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2321, scaleY: 1.2321, x: 473.9, y: 858.9 }, 0)
        .wait(1)
        .to({ scaleX: 1.2366, scaleY: 1.2366, x: 473.8, y: 897.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2412, scaleY: 1.2412, y: 935.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.2457, scaleY: 1.2457, x: 473.75, y: 974.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2503, scaleY: 1.2503, y: 1012.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.2548, scaleY: 1.2548, x: 473.65, y: 1051.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2594, scaleY: 1.2594, x: 473.6, y: 1089.85 }, 0)
        .wait(1)
        .to({ scaleX: 1.2639, scaleY: 1.2639, y: 1128.35 }, 0)
        .wait(1)
        .to({ scaleX: 1.2685, scaleY: 1.2685, x: 473.55, y: 1166.9 }, 0)
        .wait(11)
        .to({ _off: true }, 1)
        .wait(33)
    )
    // Layer_6
    this.egg = new lib.Symbol1()
    this.egg.name = 'egg'
    this.egg.setTransform(1273.3, -121.8, 1, 1, 0, 0, 0, 151, 165)
    this.timeline.addTween(
      cjs.Tween.get(this.egg)
        .wait(31)
        .to({ regY: 173, x: 1257.9, y: -113.8 }, 0)
        .wait(1)
        .to({ x: 1242.5 }, 0)
        .wait(1)
        .to({ x: 1227.1 }, 0)
        .wait(1)
        .to({ x: 1211.7 }, 0)
        .wait(1)
        .to({ x: 1196.3 }, 0)
        .wait(1)
        .to({ x: 1180.9 }, 0)
        .wait(1)
        .to({ x: 1165.55 }, 0)
        .wait(1)
        .to({ x: 1150.15 }, 0)
        .wait(1)
        .to({ x: 1134.75 }, 0)
        .wait(1)
        .to({ x: 1119.35 }, 0)
        .wait(1)
        .to({ x: 1103.95 }, 0)
        .wait(1)
        .to({ x: 1088.55 }, 0)
        .wait(1)
        .to({ x: 1073.2 }, 0)
        .wait(325)
    )
    // Layer_5
    this.coins = new lib.Symbol22()
    this.coins.name = 'coins'
    this.coins.setTransform(669.8, -122.85, 1, 1, 0, 0, 0, 472.6, 72)
    this.timeline.addTween(
      cjs.Tween.get(this.coins)
        .wait(31)
        .to({ regX: 471.7, x: 653.55 }, 0)
        .wait(1)
        .to({ x: 638.25 }, 0)
        .wait(1)
        .to({ x: 622.95 }, 0)
        .wait(1)
        .to({ x: 607.65 }, 0)
        .wait(1)
        .to({ x: 592.35 }, 0)
        .wait(1)
        .to({ x: 577.05 }, 0)
        .wait(1)
        .to({ x: 561.75 }, 0)
        .wait(1)
        .to({ x: 546.45 }, 0)
        .wait(1)
        .to({ x: 531.15 }, 0)
        .wait(1)
        .to({ x: 515.85 }, 0)
        .wait(1)
        .to({ x: 500.55 }, 0)
        .wait(1)
        .to({ x: 485.25 }, 0)
        .wait(1)
        .to({ x: 469.95 }, 0)
        .wait(325)
    )
    // Layer_1_copy
    this.instance_1 = new lib.Symbol6copy()
    this.instance_1.setTransform(69.4, 76.55, 1, 1, 0, 0, 0, 69.4, 76.5)
    this.instance_1._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(30)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 65.75, y: 72.3 }, 0)
        .wait(1)
        .to({ x: 65.7, y: 68.95 }, 0)
        .wait(1)
        .to({ x: 65.6, y: 65.55 }, 0)
        .wait(1)
        .to({ x: 65.55, y: 62.2 }, 0)
        .wait(1)
        .to({ x: 65.45, y: 58.8 }, 0)
        .wait(1)
        .to({ x: 65.4, y: 55.45 }, 0)
        .wait(1)
        .to({ x: 65.3, y: 52.05 }, 0)
        .wait(1)
        .to({ x: 65.4, y: 56 }, 0)
        .wait(1)
        .to({ x: 65.5, y: 59.95 }, 0)
        .wait(1)
        .to({ x: 65.55, y: 63.85 }, 0)
        .wait(1)
        .to({ x: 65.65, y: 67.8 }, 0)
        .wait(1)
        .to({ x: 65.75, y: 71.75 }, 0)
        .wait(1)
        .to({ x: 65.8, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
        .to({ _off: false, regX: 69.4, regY: 76.5, x: 69.4, y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 81.2, y: 73.3 }, 0)
        .wait(1)
        .to({ x: 96.65, y: 70.95 }, 0)
        .wait(1)
        .to({ x: 112.05, y: 68.6 }, 0)
        .wait(1)
        .to({ x: 127.5, y: 66.25 }, 0)
        .wait(1)
        .to({ x: 142.9, y: 63.9 }, 0)
        .wait(1)
        .to({ x: 158.35, y: 61.55 }, 0)
        .wait(1)
        .to({ x: 173.75, y: 59.15 }, 0)
        .wait(1)
        .to({ x: 189.2, y: 61.9 }, 0)
        .wait(1)
        .to({ x: 204.6, y: 64.65 }, 0)
        .wait(1)
        .to({ x: 220.05, y: 67.4 }, 0)
        .wait(1)
        .to({ x: 235.45, y: 70.15 }, 0)
        .wait(1)
        .to({ x: 250.9, y: 72.9 }, 0)
        .wait(1)
        .to({ x: 266.35, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
        .to({ _off: false, regX: 69.4, regY: 76.5, x: 269.95, y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 281.75, y: 71.45 }, 0)
        .wait(1)
        .to({ x: 297.2, y: 67.25 }, 0)
        .wait(1)
        .to({ x: 312.65, y: 63.05 }, 0)
        .wait(1)
        .to({ x: 328.1, y: 58.8 }, 0)
        .wait(1)
        .to({ x: 343.55, y: 54.6 }, 0)
        .wait(1)
        .to({ x: 359, y: 50.4 }, 0)
        .wait(1)
        .to({ x: 374.45, y: 46.15 }, 0)
        .wait(1)
        .to({ x: 389.9, y: 51.1 }, 0)
        .wait(1)
        .to({ x: 405.35, y: 56 }, 0)
        .wait(1)
        .to({ x: 420.8, y: 60.9 }, 0)
        .wait(1)
        .to({ x: 436.25, y: 65.85 }, 0)
        .wait(1)
        .to({ x: 451.7, y: 70.75 }, 0)
        .wait(1)
        .to({ x: 467.15, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
        .to({ _off: false, regX: 69.4, regY: 76.5, x: 470.75, y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 482.55, y: 71.45 }, 0)
        .wait(1)
        .to({ x: 497.95, y: 67.25 }, 0)
        .wait(1)
        .to({ x: 513.35, y: 63.05 }, 0)
        .wait(1)
        .to({ x: 528.75, y: 58.8 }, 0)
        .wait(1)
        .to({ x: 544.15, y: 54.6 }, 0)
        .wait(1)
        .to({ x: 559.55, y: 50.4 }, 0)
        .wait(1)
        .to({ x: 574.95, y: 46.15 }, 0)
        .wait(1)
        .to({ x: 590.35, y: 51.1 }, 0)
        .wait(1)
        .to({ x: 605.75, y: 56 }, 0)
        .wait(1)
        .to({ x: 621.15, y: 60.9 }, 0)
        .wait(1)
        .to({ x: 636.55, y: 65.85 }, 0)
        .wait(1)
        .to({ x: 651.95, y: 70.75 }, 0)
        .wait(1)
        .to({ x: 667.4, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
        .to({ _off: false, regX: 69.4, regY: 76.5, x: 671, y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 682.7, y: 71.45 }, 0)
        .wait(1)
        .to({ x: 698, y: 67.25 }, 0)
        .wait(1)
        .to({ x: 713.3, y: 63.05 }, 0)
        .wait(1)
        .to({ x: 728.6, y: 58.8 }, 0)
        .wait(1)
        .to({ x: 743.9, y: 54.6 }, 0)
        .wait(1)
        .to({ x: 759.2, y: 50.4 }, 0)
        .wait(1)
        .to({ x: 774.55, y: 46.15 }, 0)
        .wait(1)
        .to({ x: 789.85, y: 51.1 }, 0)
        .wait(1)
        .to({ x: 805.15, y: 56 }, 0)
        .wait(1)
        .to({ x: 820.45, y: 60.9 }, 0)
        .wait(1)
        .to({ x: 835.75, y: 65.85 }, 0)
        .wait(1)
        .to({ x: 851.05, y: 70.75 }, 0)
        .wait(1)
        .to({ x: 866.4, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(30)
        .to({ _off: false, regX: 69.4, regY: 76.5, x: 870, y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 65.8, regY: 75.6, x: 881.8, y: 71.45 }, 0)
        .wait(1)
        .to({ x: 897.2, y: 67.25 }, 0)
        .wait(1)
        .to({ x: 912.6, y: 63.05 }, 0)
        .wait(1)
        .to({ x: 928, y: 58.8 }, 0)
        .wait(1)
        .to({ x: 943.45, y: 54.6 }, 0)
        .wait(1)
        .to({ x: 958.85, y: 50.4 }, 0)
        .wait(1)
        .to({ x: 974.25, y: 46.15 }, 0)
        .wait(1)
        .to({ x: 989.65, y: 51.1 }, 0)
        .wait(1)
        .to({ x: 1005.1, y: 56 }, 0)
        .wait(1)
        .to({ x: 1020.5, y: 60.9 }, 0)
        .wait(1)
        .to({ x: 1035.9, y: 65.85 }, 0)
        .wait(1)
        .to({ x: 1051.3, y: 70.75 }, 0)
        .wait(1)
        .to({ x: 1066.75, y: 75.65 }, 0)
        .to({ _off: true }, 1)
        .wait(104)
    )
    // Layer_1
    this.instance_2 = new lib.Symbol6()
    this.instance_2.setTransform(69.4, 76.55, 1, 1, 0, 0, 0, 69.4, 76.5)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 68.45, y: 75 }, 0)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 269.95, y: 76.55 }, 0)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 470.75 }, 0)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 671 }, 0)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 870 }, 0)
        .to({ _off: true }, 30)
        .wait(14)
        .to({ _off: false, x: 1070.35 }, 0)
        .wait(1)
        .to({ regX: 67.4, x: 1068.35, y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 62.45 }, 0)
        .wait(1)
        .to({ y: 67.15 }, 0)
        .wait(1)
        .to({ y: 71.85 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 69.4, x: 1070.35 }, 0)
        .wait(1)
        .to({ regX: 67.4, x: 1068.35, y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 62.45 }, 0)
        .wait(1)
        .to({ y: 67.15 }, 0)
        .wait(1)
        .to({ y: 71.85 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ regX: 69.4, x: 1070.35 }, 0)
        .wait(1)
        .to({ regX: 67.4, x: 1068.35, y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .wait(1)
        .to({ y: 72.8 }, 0)
        .wait(1)
        .to({ y: 69.05 }, 0)
        .wait(1)
        .to({ y: 65.25 }, 0)
        .wait(1)
        .to({ y: 61.5 }, 0)
        .wait(1)
        .to({ y: 57.7 }, 0)
        .wait(1)
        .to({ y: 62.45 }, 0)
        .wait(1)
        .to({ y: 67.15 }, 0)
        .wait(1)
        .to({ y: 71.85 }, 0)
        .wait(1)
        .to({ y: 76.55 }, 0)
        .to({ _off: true }, 1)
        .wait(14)
    )
    // Layer_9
    this.instance_3 = new lib.Symbol24()
    this.instance_3.setTransform(464, -63.05, 1, 1, 0, 0, 0, 512, 296.1)
    this.instance_3.alpha = 0
    this.instance_3._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(264)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ alpha: 0.0738 }, 0)
        .wait(1)
        .to({ alpha: 0.1475 }, 0)
        .wait(1)
        .to({ alpha: 0.2213 }, 0)
        .wait(1)
        .to({ alpha: 0.295 }, 0)
        .wait(1)
        .to({ alpha: 0.3688 }, 0)
        .wait(1)
        .to({ alpha: 0.4425 }, 0)
        .wait(1)
        .to({ alpha: 0.5163 }, 0)
        .wait(1)
        .to({ alpha: 0.59 }, 0)
        .wait(44)
        .to({ alpha: 0.5163 }, 0)
        .wait(1)
        .to({ alpha: 0.4425 }, 0)
        .wait(1)
        .to({ alpha: 0.3688 }, 0)
        .wait(1)
        .to({ alpha: 0.295 }, 0)
        .wait(1)
        .to({ alpha: 0.2213 }, 0)
        .wait(1)
        .to({ alpha: 0.1475 }, 0)
        .wait(1)
        .to({ alpha: 0.0738 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(45)
    )
    // Layer_3
    this.instance_4 = new lib.Symbol19()
    this.instance_4.setTransform(71.05, -53, 1, 1, 0, 0, 0, 98, 206)
    this.instance_4.alpha = 0
    this.instance_4._off = true
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(39)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(30)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(6)
        .to({ x: 270, y: -39 }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(30)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(6)
        .to({ x: 470.4 }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(30)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(6)
        .to({ x: 669.65 }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(30)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(6)
        .to({ x: 870 }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(30)
        .to({ alpha: 0.75 }, 0)
        .wait(1)
        .to({ alpha: 0.5 }, 0)
        .wait(1)
        .to({ alpha: 0.25 }, 0)
        .wait(1)
        .to({ alpha: 0 }, 0)
        .wait(6)
        .to({ x: 1070.35 }, 0)
        .wait(1)
        .to({ alpha: 0.2 }, 0)
        .wait(1)
        .to({ alpha: 0.4 }, 0)
        .wait(1)
        .to({ alpha: 0.6 }, 0)
        .wait(1)
        .to({ alpha: 0.8 }, 0)
        .wait(1)
        .to({ alpha: 1 }, 0)
        .wait(104)
    )
    // Layer_4
    this.instance_5 = new lib.Symbol20()
    this.instance_5.setTransform(671, -84.05, 1, 1, 0, 0, 0, 701, 250)
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(31)
        .to({ x: 655.7 }, 0)
        .wait(1)
        .to({ x: 640.4 }, 0)
        .wait(1)
        .to({ x: 625.1 }, 0)
        .wait(1)
        .to({ x: 609.8 }, 0)
        .wait(1)
        .to({ x: 594.5 }, 0)
        .wait(1)
        .to({ x: 579.2 }, 0)
        .wait(1)
        .to({ x: 563.9 }, 0)
        .wait(1)
        .to({ x: 548.6 }, 0)
        .wait(1)
        .to({ x: 533.3 }, 0)
        .wait(1)
        .to({ x: 518 }, 0)
        .wait(1)
        .to({ x: 502.7 }, 0)
        .wait(1)
        .to({ x: 487.4 }, 0)
        .wait(1)
        .to({ x: 472.05 }, 0)
        .wait(325)
    )
    this._renderFirstFrame()
  }).prototype = p = new cjs.MovieClip()
  p.nominalBounds = new cjs.Rectangle(
    -493.4,
    -1898.1,
    1934.1999999999998,
    4031.7999999999997
  )
  // stage content:
  ;(lib.chickengame_ready = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true
    }
    if (reversed == null) {
      reversed = false
    }
    var props = new Object()
    props.mode = mode
    props.startPosition = startPosition
    props.labels = {}
    props.loop = loop
    props.reversed = reversed
    cjs.MovieClip.apply(this, [props])
    this.actionFrames = [0]
    this.isSingleFrame = false
    // timeline functions:
    this.frame_0 = function () {
      if (this.isSingleFrame) {
        return
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true
      }
      //   this.btn1.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_2.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_2() {
        this.game.gotoAndPlay(31)
      }
      //   this.btn2.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_3.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_3() {
        this.game.gotoAndPlay(75)
      }
      //   this.btn3.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_4.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_4() {
        this.game.gotoAndPlay(119)
      }
      //   this.btn4.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_5.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_5() {
        this.game.gotoAndPlay(163)
      }
      //   this.btn5.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_6.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_6() {
        this.game.gotoAndPlay(207)
      }
      //   this.btn6.addEventListener(
      //     'click',
      //     fl_ClickToGoToAndPlayFromFrame_7.bind(this)
      //   )
      function fl_ClickToGoToAndPlayFromFrame_7() {
        this.game.gotoAndPlay(251)
      }
    }
    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1))
    // Layer_2
    this.shape = new cjs.Shape()
    this.shape.graphics
      .f()
      .s('#161824')
      .ss(7, 1, 1)
      .p('EheGgnbMC8NAAAMAAABO3Mi8NAAAg')
    this.shape.setTransform(605.125, 255.1)
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1))
    // icon_svg
    this.game = new lib.Symbol7()
    this.game.name = 'game'
    this.game.setTransform(104.4, 416.7, 1, 1, 0, 0, 0, 69.4, 76.5)
    this.timeline.addTween(cjs.Tween.get(this.game).wait(1))
    this._renderFirstFrame()

    startBtn.addEventListener('click', () => {
      counter++
      goBtn.classList.add('disabled')
      btnsStart.classList.add('hidden')
      btnsReady.classList.add('visible')

      if (counter === 1) {
        this.game.gotoAndPlay(31)
        return
      }
    })

    goBtn.addEventListener('click', () => {
      counter++
      goBtn.classList.add('disabled')

      if (counter === 1) {
        this.game.gotoAndPlay(31)
        return
      }

      if (counter === 2) {
        this.game.gotoAndPlay(75)
        return
      }

      if (counter === 3) {
        this.game.gotoAndPlay(119)
        return
      }

      if (counter === 4) {
        this.game.gotoAndPlay(163)
        return
      }

      if (counter === 5) {
        this.game.gotoAndPlay(207)
        return
      }

      if (counter === 6) {
        this.game.gotoAndPlay(251)
        particles.classList.add('show')
        localStorage.showpopup = '3808_showpopup'
        return
      }
    })
  }).prototype = p = new lib.AnMovieClip()

  p.nominalBounds = new cjs.Rectangle(604.3, 254.2, 855, 256.8)
  // library properties:
  lib.properties = {
    id: 'D4A8A9AE16270A4D8C71755B44BB9194',
    width: 1210,
    height: 510,
    fps: 40,
    color: '#000000',
    opacity: 1.0,
    manifest: [
      { src: './pics/slot_atlas_1.png?1738341290117', id: 'slot_atlas_1' },
    ],
    preloads: [],
  }
  // bootstrap callback support:
  ;(lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas)
  }).prototype = p = new createjs.Stage()
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay
  }
  p.play = function () {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
  }
  p.stop = function (ms) {
    if (ms) this.seek(ms)
    this.tickEnabled = false
  }
  p.seek = function (ms) {
    this.tickEnabled = true
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000)
  }
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000
  }
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000
  }
  an.bootcompsLoaded = an.bootcompsLoaded || []
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = []
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback)
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i])
      }
    }
  }
  an.compositions = an.compositions || {}
  an.compositions['D4A8A9AE16270A4D8C71755B44BB9194'] = {
    getStage: function () {
      return exportRoot.stage
    },
    getLibrary: function () {
      return lib
    },
    getSpriteSheet: function () {
      return ss
    },
    getImages: function () {
      return img
    },
  }
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id)
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id)
    }
  }
  an.getComposition = function (id) {
    return an.compositions[id]
  }
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height
      var iw = window.innerWidth,
        ih = window.innerHeight
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1
      if (isResp) {
        if (
          (respDim == 'width' && lastW == iw) ||
          (respDim == 'height' && lastH == ih)
        ) {
          sRatio = lastS
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio)
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio)
        }
      }
      domContainers[0].width = w * pRatio * sRatio
      domContainers[0].height = h * pRatio * sRatio
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px'
        container.style.height = h * sRatio + 'px'
      })
      stage.scaleX = pRatio * sRatio
      stage.scaleY = pRatio * sRatio
      lastW = iw
      lastH = ih
      lastS = sRatio
      stage.tickOnUpdate = false
      stage.update()
      stage.tickOnUpdate = true
    }
  }
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0)
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds()
      }
    }
  }
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index]
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              )
            }
          }
        }
      }
    }
  }
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}))
var createjs, AdobeAn

var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation
function init() {
  canvas = document.getElementById('canvas')
  anim_container = document.getElementById('animation_container')
  dom_overlay_container = document.getElementById('dom_overlay_container')
  var comp = AdobeAn.getComposition('D4A8A9AE16270A4D8C71755B44BB9194')
  var lib = comp.getLibrary()
  var loader = new createjs.LoadQueue(false)
  loader.addEventListener('fileload', function (evt) {
    handleFileLoad(evt, comp)
  })
  loader.addEventListener('complete', function (evt) {
    handleComplete(evt, comp)
  })
  var lib = comp.getLibrary()
  loader.loadManifest(lib.properties.manifest)
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages()
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result
  }
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary()
  var ss = comp.getSpriteSheet()
  var queue = evt.target
  var ssMetadata = lib.ssMetadata
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames,
    })
  }
  exportRoot = new lib.chickengame_ready()
  stage = new lib.Stage(canvas)
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot)
    createjs.Ticker.framerate = lib.properties.fps
    createjs.Ticker.addEventListener('tick', stage)
  }
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, 'both', false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ])
  AdobeAn.compositionLoaded(lib.properties.id)
  fnStartAnimation()
}
