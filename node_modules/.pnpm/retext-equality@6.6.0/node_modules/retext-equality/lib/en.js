/**
 * @typedef Pattern
 * @property {string} id
 * @property {'or'|'basic'} type
 * @property {string[]} categories
 * @property {Record<string, string>} [considerate]
 * @property {Record<string, string>} inconsiderate
 * @property {string} [condition]
 * @property {string} [note]
 * @property {boolean} [apostrophe]
 */

/** @type {Pattern[]} */
export const patterns = [
  {
    id: 'learning-disabled',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with learning disabilities': 'a'
    },
    inconsiderate: {
      'learning disabled': 'a'
    },
    note: 'Refer to the person, rather than the disability, first.'
  },
  {
    id: 'invalid',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'turned off': 'a',
      'has a disability': 'a',
      'person with a disability': 'a',
      'people with disabilities': 'a'
    },
    inconsiderate: {
      disabled: 'a',
      invalid: 'a'
    },
    note: 'Refer to the person, rather than the disability, first.'
  },
  {
    id: 'birth-defect',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'has a disability': 'a',
      'person with a disability': 'a',
      'people with disabilities': 'a'
    },
    inconsiderate: {
      'birth defect': 'a'
    },
    note: 'Assumes/implies that a person with a disability is deficient or inferior to others. When possible, specify the functional ability or its restriction. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'suffers-from-disabilities',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'has a disability': 'a',
      'person with a disability': 'a',
      'people with disabilities': 'a'
    },
    inconsiderate: {
      'suffers from disabilities': 'a',
      'suffering from disabilities': 'a',
      'suffering from a disability': 'a',
      'afflicted with disabilities': 'a',
      'afflicted with a disability': 'a'
    },
    note: 'Assumes that a person with a disability has a reduced quality of life. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'intellectually-disabled-people',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'people with intellectual disabilities': 'a'
    },
    inconsiderate: {
      'intellectually disabled people': 'a'
    },
    note: 'Refer to the person, rather than the disability, first. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'intellectually-disabled',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with an intellectual disability': 'a'
    },
    inconsiderate: {
      'intellectually disabled': 'a',
      'has intellectual issues': 'a',
      'suffers from intellectual disabilities': 'a',
      'suffering from intellectual disabilities': 'a',
      'suffering from an intellectual disability': 'a',
      'afflicted with intellectual disabilities': 'a',
      'afflicted with a intellectual disability': 'a'
    },
    note: 'Assumes that a person with an intellectual disability has a reduced quality of life. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'nuts',
    type: 'basic',
    categories: ['a'],
    considerate: {
      rude: 'a',
      malicious: 'a',
      mean: 'a',
      disgusting: 'a',
      incredible: 'a',
      vile: 'a',
      'person with symptoms of mental illness': 'a',
      'person with mental illness': 'a',
      'person with symptoms of a mental disorder': 'a',
      'person with a mental disorder': 'a'
    },
    inconsiderate: {
      batshit: 'a',
      psycho: 'a',
      crazy: 'a',
      delirious: 'a',
      insane: 'a',
      insanity: 'a',
      loony: 'a',
      lunacy: 'a',
      lunatic: 'a',
      'mentally ill': 'a',
      psychopathology: 'a',
      'mental defective': 'a',
      moron: 'a',
      moronic: 'a',
      nuts: 'a',
      'mental case': 'a',
      mental: 'a'
    },
    note: 'Describe the behavior or illness without derogatory words. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'insanely',
    type: 'basic',
    categories: ['a'],
    considerate: {
      incredibly: 'a'
    },
    inconsiderate: {
      insanely: 'a'
    },
    note: 'Describe the behavior or illness without derogatory words.'
  },
  {
    id: 'sane',
    type: 'basic',
    categories: ['a'],
    considerate: {
      correct: 'a',
      adequate: 'a',
      sufficient: 'a',
      consistent: 'a',
      valid: 'a',
      coherent: 'a',
      sensible: 'a',
      reasonable: 'a'
    },
    inconsiderate: {
      sane: 'a'
    },
    note: 'When describing a mathematical or programmatic value, using the word “sane” needlessly invokes the topic of mental health.  Consider using a domain-specific or neutral term instead.'
  },
  {
    id: 'sanity-check',
    type: 'basic',
    categories: ['a'],
    considerate: {
      check: 'a',
      assertion: 'a',
      validation: 'a',
      'smoke test': 'a'
    },
    inconsiderate: {
      'sanity check': 'a'
    },
    note: 'When describing a mathematical or programmatic value, using the phrase “sanity check” needlessly invokes the topic of mental health.  Consider using simply “check”, or a domain-specific or neutral term, instead.'
  },
  {
    id: 'bipolar',
    type: 'basic',
    categories: ['a'],
    considerate: {
      fluctuating: 'a',
      'person with bipolar disorder': 'a'
    },
    inconsiderate: {
      bipolar: 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'schizo',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with schizophrenia': 'a'
    },
    inconsiderate: {
      schizophrenic: 'a',
      schizo: 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'manic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with schizophrenia': 'a'
    },
    inconsiderate: {
      'suffers from schizophrenia': 'a',
      'suffering from schizophrenia': 'a',
      'afflicted with schizophrenia': 'a',
      manic: 'a'
    },
    note: 'Assumes a person with schizophrenia experiences a reduced quality of life. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'handicapped-parking',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'accessible parking': 'a'
    },
    inconsiderate: {
      'handicapped parking': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'handicapped',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a handicap': 'a',
      accessible: 'a'
    },
    inconsiderate: {
      handicapped: 'a'
    },
    note: 'Refer to the person, rather than the disability, first. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'amputee',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with an amputation': 'a'
    },
    inconsiderate: {
      amputee: 'a'
    },
    note: 'Refer to the person, rather than the condition, first. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'gimp',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a limp': 'a'
    },
    inconsiderate: {
      cripple: 'a',
      crippled: 'a',
      gimp: 'a'
    },
    note: 'Refer to the specific disability.'
  },
  {
    id: 'mongoloid',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with Down Syndrome': 'a'
    },
    inconsiderate: {
      mongoloid: 'a'
    }
  },
  {
    id: 'stroke-victim',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'individual who has had a stroke': 'a'
    },
    inconsiderate: {
      'stroke victim': 'a',
      'suffering from a stroke': 'a',
      'victim of a stroke': 'a'
    },
    note: 'Refer to the person, rather than the condition, first.'
  },
  {
    id: 'multiple-sclerosis-victim',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person who has multiple sclerosis': 'a'
    },
    inconsiderate: {
      'suffers from multiple sclerosis': 'a',
      'suffering from multiple sclerosis': 'a',
      'victim of multiple sclerosis': 'a',
      'multiple sclerosis victim': 'a',
      'afflicted with multiple sclerosis': 'a'
    }
  },
  {
    id: 'suffers-from-md',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person who has muscular dystrophy': 'a'
    },
    inconsiderate: {
      'suffers from muscular dystrophy': 'a',
      'afflicted with muscular dystrophy': 'a',
      'suffers from MD': 'a',
      'afflicted with MD': 'a'
    },
    note: "Refer to a person's condition as a state, not as an affliction. (source: https://ncdj.org/style-guide)"
  },
  {
    id: 'family-burden',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'with family support needs': 'a'
    },
    inconsiderate: {
      'family burden': 'a'
    }
  },
  {
    id: 'asylum',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'psychiatric hospital': 'a',
      'mental health hospital': 'a'
    },
    inconsiderate: {
      asylum: 'a'
    }
  },
  {
    id: 'bedlam',
    type: 'basic',
    categories: ['a'],
    considerate: {
      chaos: 'a',
      hectic: 'a',
      pandemonium: 'a'
    },
    inconsiderate: {
      bedlam: 'a',
      madhouse: 'a',
      'loony bin': 'a'
    }
  },
  {
    id: 'downs-syndrome',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Down Syndrome': 'a'
    },
    inconsiderate: {
      'downs syndrome': 'a'
    },
    note: 'Source: https://media.specialolympics.org/soi/files/press-kit/2014_FactSheet_Final.pdf'
  },
  {
    id: 'retard',
    type: 'basic',
    categories: ['a'],
    considerate: {
      silly: 'a',
      dullard: 'a',
      'person with Down Syndrome': 'a',
      'person with developmental disabilities': 'a',
      delay: 'a',
      'hold back': 'a'
    },
    inconsiderate: {
      retard: 'a',
      retarded: 'a',
      'short bus': 'a'
    }
  },
  {
    id: 'retards',
    type: 'basic',
    categories: ['a'],
    considerate: {
      sillies: 'a',
      dullards: 'a',
      'people with developmental disabilities': 'a',
      'people with Down’s Syndrome': 'a',
      delays: 'a',
      'holds back': 'a'
    },
    inconsiderate: {
      retards: 'a'
    }
  },
  {
    id: 'psychotic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a psychotic condition': 'a',
      'person with psychosis': 'a'
    },
    inconsiderate: {
      psychotic: 'a',
      'suffers from psychosis': 'a',
      'suffering from psychosis': 'a',
      'afflicted with psychosis': 'a',
      'victim of psychosis': 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition.'
  },
  {
    id: 'lame',
    type: 'basic',
    categories: ['a'],
    considerate: {
      boring: 'a',
      dull: 'a'
    },
    inconsiderate: {
      lame: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'aids-victim',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with AIDS': 'a'
    },
    inconsiderate: {
      'suffering from aids': 'a',
      'suffer from aids': 'a',
      'suffers from aids': 'a',
      'afflicted with aids': 'a',
      'victim of aids': 'a',
      'aids victim': 'a'
    }
  },
  {
    id: 'wheelchair-bound',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'uses a wheelchair': 'a'
    },
    inconsiderate: {
      'confined to a wheelchair': 'a',
      'bound to a wheelchair': 'a',
      'restricted to a wheelchair': 'a',
      'wheelchair bound': 'a'
    }
  },
  {
    id: 'special-olympians',
    type: 'basic',
    categories: ['a'],
    considerate: {
      athletes: 'a',
      'Special Olympics athletes': 'a'
    },
    inconsiderate: {
      'special olympians': 'a',
      'special olympic athletes': 'a'
    },
    note: 'When possible, use the exact discipline of sport. (source: https://media.specialolympics.org/soi/files/press-kit/2014_FactSheet_Final.pdf)'
  },
  {
    id: 'ablebodied',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'non-disabled': 'a'
    },
    inconsiderate: {
      ablebodied: 'a'
    },
    note: 'Can imply that people with disabilities lack the ability to use their bodies well. Sometimes `typical` can be used. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'addict',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a drug addiction': 'a',
      'person recovering from a drug addiction': 'a'
    },
    inconsiderate: {
      addict: 'a',
      junkie: 'a'
    },
    note: 'Addiction is a neurobiological disease. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'addicts',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'people with a drug addiction': 'a',
      'people recovering from a drug addiction': 'a'
    },
    inconsiderate: {
      addicts: 'a',
      junkies: 'a'
    },
    note: 'Addiction is a neurobiological disease. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'alcoholic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'someone with an alcohol problem': 'a'
    },
    inconsiderate: {
      alcoholic: 'a',
      'alcohol abuser': 'a'
    },
    note: 'Alcoholism is a neurobiological disease. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'deafmute',
    type: 'basic',
    categories: ['a'],
    considerate: {
      deaf: 'a'
    },
    inconsiderate: {
      'deaf and dumb': 'a',
      deafmute: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'senile',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with dementia': 'a'
    },
    inconsiderate: {
      demented: 'a',
      senile: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'depressed',
    type: 'basic',
    categories: ['a'],
    considerate: {
      sad: 'a',
      blue: 'a',
      'bummed out': 'a',
      'person with seasonal affective disorder': 'a',
      'person with psychotic depression': 'a',
      'person with postpartum depression': 'a'
    },
    inconsiderate: {
      depressed: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'dwarf',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with dwarfism': 'a',
      'little person': 'a',
      'little people': 'a',
      LP: 'a',
      'person of short stature': 'a'
    },
    inconsiderate: {
      'vertically challenged': 'a',
      midget: 'a',
      'small person': 'a',
      dwarf: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/,https://www.lpaonline.org/faq-#Midget'
  },
  {
    id: 'dyslexic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with dyslexia': 'a'
    },
    inconsiderate: {
      dyslexic: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'epileptic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with epilepsy': 'a'
    },
    inconsiderate: {
      epileptic: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'hearing-impaired',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'hard of hearing': 'a',
      'partially deaf': 'a',
      'partial hearing loss': 'a',
      deaf: 'a'
    },
    inconsiderate: {
      'hearing impaired': 'a',
      'hearing impairment': 'a'
    },
    note: 'When possible, ask the person what they prefer. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'victim-of-polio',
    type: 'basic',
    categories: ['a'],
    considerate: {
      polio: 'a',
      'person who had polio': 'a'
    },
    inconsiderate: {
      'infantile paralysis': 'a',
      'suffers from polio': 'a',
      'suffering from polio': 'a',
      'suffering from a polio': 'a',
      'afflicted with polio': 'a',
      'afflicted with a polio': 'a',
      'victim of polio': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'victim-of-an-injury',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'sustain an injury': 'a',
      'receive an injury': 'a'
    },
    inconsiderate: {
      'suffer from an injury': 'a',
      'suffers from an injury': 'a',
      'suffering from an injury': 'a',
      'afflicted with an injury': 'a',
      'victim of an injury': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'victim-of-injuries',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'sustain injuries': 'a',
      'receive injuries': 'a'
    },
    inconsiderate: {
      'suffer from injuries': 'a',
      'suffers from injuries': 'a',
      'suffering from injuries': 'a',
      'afflicted with injuries': 'a',
      'victim of injuries': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'paraplegic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with paraplegia': 'a'
    },
    inconsiderate: {
      paraplegic: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'quadriplegic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with quadriplegia': 'a'
    },
    inconsiderate: {
      quadriplegic: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'spaz',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with cerebral palsy': 'a',
      twitch: 'a',
      flinch: 'a',
      hectic: 'a'
    },
    inconsiderate: {
      spaz: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'spastic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with cerebral palsy': 'a',
      twitch: 'a',
      flinch: 'a'
    },
    inconsiderate: {
      spastic: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'stammering',
    type: 'basic',
    categories: ['a'],
    considerate: {
      stuttering: 'a',
      'disfluency of speech': 'a'
    },
    inconsiderate: {
      stammering: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'stutterer',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person who stutters': 'a'
    },
    inconsiderate: {
      stutterer: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'tourettes-syndrome',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Tourette syndrome': 'a'
    },
    inconsiderate: {
      'tourettes syndrome': 'a',
      'tourettes disorder': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'rehab-center',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'treatment center': 'a'
    },
    inconsiderate: {
      'rehab center': 'a',
      'detox center': 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'rehab',
    type: 'basic',
    categories: ['a'],
    considerate: {
      treatment: 'a'
    },
    inconsiderate: {
      rehab: 'a',
      detox: 'a'
    },
    note: 'Source: https://ncdj.org/style-guide/'
  },
  {
    id: 'sociopath',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a personality disorder': 'a',
      'person with psychopathic personality': 'a'
    },
    inconsiderate: {
      sociopath: 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'sociopaths',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'people with psychopathic personalities': 'a',
      'people with a personality disorder': 'a'
    },
    inconsiderate: {
      sociopaths: 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://ncdj.org/style-guide/)'
  },
  {
    id: 'dumb',
    type: 'basic',
    categories: ['a'],
    considerate: {
      foolish: 'a',
      ludicrous: 'a',
      speechless: 'a',
      silent: 'a'
    },
    inconsiderate: {
      dumb: 'a'
    },
    note: 'Dumb here is used in 2 different contexts , the inability to talk or as a curse word. (source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)'
  },
  {
    id: 'wacko',
    type: 'basic',
    categories: ['a'],
    considerate: {
      foolish: 'a',
      ludicrous: 'a',
      unintelligent: 'a'
    },
    inconsiderate: {
      simpleton: 'a',
      stupid: 'a',
      wacko: 'a',
      whacko: 'a',
      'low iq': 'a'
    },
    note: 'Source: http://www.mmonjejr.com/2014/02/deconstructing-stupid.html'
  },
  {
    id: 'panic-attack',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'fit of terror': 'a',
      scare: 'a'
    },
    inconsiderate: {
      'panic attack': 'a'
    }
  },
  {
    id: 'bony',
    type: 'basic',
    categories: ['a'],
    considerate: {
      thin: 'a',
      slim: 'a'
    },
    inconsiderate: {
      anorexic: 'a',
      bony: 'a'
    }
  },
  {
    id: 'ocd',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'has an anxiety disorder': 'a',
      obsessive: 'a',
      pedantic: 'a',
      niggly: 'a',
      picky: 'a'
    },
    inconsiderate: {
      neurotic: 'a',
      ocd: 'a',
      'o.c.d': 'a',
      'o.c.d.': 'a'
    },
    note: 'Only use terms describing mental illness when referring to a professionally diagnosed medical condition. (source: https://english.stackexchange.com/questions/247550/)'
  },
  {
    id: 'insomnia',
    type: 'basic',
    categories: ['a'],
    considerate: {
      restlessness: 'a',
      sleeplessness: 'a'
    },
    inconsiderate: {
      insomnia: 'a'
    }
  },
  {
    id: 'insomniac',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person who has insomnia': 'a'
    },
    inconsiderate: {
      insomniac: 'a'
    }
  },
  {
    id: 'insomniacs',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'people who have insomnia': 'a'
    },
    inconsiderate: {
      insomniacs: 'a'
    }
  },
  {
    id: 'barren',
    type: 'basic',
    categories: ['a'],
    considerate: {
      empty: 'a',
      sterile: 'a',
      infertile: 'a'
    },
    inconsiderate: {
      barren: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'deaf-to',
    type: 'basic',
    categories: ['a'],
    considerate: {
      careless: 'a',
      heartless: 'a',
      indifferent: 'a',
      insensitive: 'a'
    },
    inconsiderate: {
      'blind to': 'a',
      'blind eye to': 'a',
      'blinded by': 'a',
      'deaf to': 'a',
      'deaf ear to': 'a',
      'deafened by': 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'cretin',
    type: 'basic',
    categories: ['a'],
    considerate: {
      creep: 'a',
      fool: 'a'
    },
    inconsiderate: {
      cretin: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'daft',
    type: 'basic',
    categories: ['a'],
    considerate: {
      absurd: 'a',
      foolish: 'a'
    },
    inconsiderate: {
      daft: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'idiot',
    type: 'basic',
    categories: ['a'],
    considerate: {
      foolish: 'a',
      ludicrous: 'a',
      silly: 'a'
    },
    inconsiderate: {
      feebleminded: 'a',
      'feeble minded': 'a',
      idiot: 'a',
      imbecile: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'harelipped',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with a cleft-lip and palate': 'a'
    },
    inconsiderate: {
      harelipped: 'a',
      cleftlipped: 'a'
    },
    note: "Sometimes it's cleft lip or palate, not both. Specify when possible. (source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)"
  },
  {
    id: 'harelip',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'cleft-lip and palate': 'a'
    },
    inconsiderate: {
      harelip: 'a',
      'hare lip': 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'maniac',
    type: 'basic',
    categories: ['a'],
    considerate: {
      fanatic: 'a',
      zealot: 'a',
      enthusiast: 'a'
    },
    inconsiderate: {
      maniac: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'buckteeth',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person with prominent teeth': 'a',
      'prominent teeth': 'a'
    },
    inconsiderate: {
      bucktoothed: 'a',
      buckteeth: 'a'
    }
  },
  {
    id: 'special',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'has a disability': 'a',
      'person with a disability': 'a',
      'people with disabilities': 'a'
    },
    inconsiderate: {
      challenged: 'a',
      diffability: 'a',
      'differently abled': 'a',
      handicapable: 'a',
      special: 'a',
      'special needs': 'a',
      'specially abled': 'a'
    },
    note: 'Euphemisms for disabilities can be infantilizing. (source: http://cdrnys.org/blog/disability-dialogue/the-disability-dialogue-4-disability-euphemisms-that-need-to-bite-the-dust/,https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html)'
  },
  {
    id: 'libtard',
    type: 'basic',
    categories: ['a'],
    considerate: {
      disagreeable: 'a',
      uneducated: 'a',
      ignorant: 'a',
      naive: 'a',
      inconsiderate: 'a'
    },
    inconsiderate: {
      fucktard: 'a',
      libtard: 'a',
      contard: 'a'
    },
    note: 'Source: https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html'
  },
  {
    id: 'add',
    type: 'basic',
    categories: ['a'],
    considerate: {
      disorganized: 'a',
      distracted: 'a',
      energetic: 'a',
      hyperactive: 'a',
      impetuous: 'a',
      impulsive: 'a',
      inattentive: 'a',
      restless: 'a',
      unfocused: 'a'
    },
    inconsiderate: {
      ADD: 'a',
      adhd: 'a',
      'a.d.d.': 'a',
      'a.d.h.d.': 'a'
    }
  },
  {
    id: 'dummy',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'test double': 'a',
      placeholder: 'a',
      fake: 'a',
      stub: 'a'
    },
    inconsiderate: {
      dummyvariable: 'a',
      dummyvalue: 'a',
      dummyobject: 'a',
      dummy: 'a'
    },
    note: 'Dummy can refer to the inability to talk or be used as a derogatory word meaning stupid. In computer programming it is used where a value or behavior is unimportant. There are better alternatives for other use cases also.'
  },
  {
    id: 'binge',
    type: 'basic',
    categories: ['a'],
    considerate: {
      enthusiastic: 'a',
      spree: 'a'
    },
    inconsiderate: {
      binge: 'a'
    },
    note: 'Binge might be insensitive towards folks with eating or drinking disorders (source: https://github.com/retextjs/retext-equality/issues/110)'
  },
  {
    id: 'obvious',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      obvious: 'a',
      obviously: 'a'
    },
    note: 'Not everything is as obvious as you might think. And if it isn’t obvious to the reader, it can hurt. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'just',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      just: 'a'
    },
    note: 'Not everything is as easy as you might think. And if it isn’t easy for the reader, it can hurt. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'basically',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      basically: 'a'
    },
    note: 'It’s probably not that basic. If you’re going to explain a confusing previous sentence with a clearer next sentence, why not drop the former and only use the latter? (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'simple',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      simple: 'a',
      simply: 'a'
    },
    note: 'It’s probably not that simple. Even if it is, you probably don’t need to specifically say it. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'easy',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      easy: 'a',
      easily: 'a'
    },
    note: 'It’s probably not that easy. Even if it is, you probably don’t need to specifically say it. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'of-course',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      'of course': 'a'
    },
    note: 'If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'clearly',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      clearly: 'a'
    },
    note: 'If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'everyone-knows',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      'everyone knows': 'a'
    },
    note: 'If it’s self-evident then maybe you don’t need to describe it. If it isn’t, don’t say it. (source: https://css-tricks.com/words-avoid-educational-writing/)'
  },
  {
    id: 'straightforward',
    type: 'basic',
    categories: ['a'],
    inconsiderate: {
      'straight forward': 'a',
      straightforward: 'a',
      'straight forwardly': 'a',
      straightforwardly: 'a'
    },
    note: 'It’s probably not that straight forward. Even if it is, you probably don’t need to specifically say it.'
  },
  {
    id: 'her-him',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      their: 'a',
      theirs: 'a',
      them: 'a'
    },
    inconsiderate: {
      her: 'female',
      hers: 'female',
      him: 'male',
      his: 'male'
    },
    condition: 'when referring to a person'
  },
  {
    id: 'he-she',
    type: 'or',
    apostrophe: true,
    categories: ['female', 'male'],
    considerate: {
      they: 'a',
      it: 'a'
    },
    inconsiderate: {
      she: 'female',
      he: 'male',
      "she'd": 'female',
      "he'd": 'male',
      "she'll": 'female',
      "he'll": 'male',
      "she's": 'female',
      "he's": 'male'
    }
  },
  {
    id: 'herself-himself',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      themselves: 'a',
      theirself: 'a',
      self: 'a'
    },
    inconsiderate: {
      herself: 'female',
      himself: 'male'
    }
  },
  {
    id: 'boy-girl',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      kid: 'a',
      child: 'a',
      youth: 'a'
    },
    inconsiderate: {
      girl: 'female',
      boy: 'male'
    },
    condition: 'when referring to a person'
  },
  {
    id: 'gals-man',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      people: 'a',
      persons: 'a',
      folks: 'a'
    },
    inconsiderate: {
      women: 'female',
      girls: 'female',
      gals: 'female',
      ladies: 'female',
      man: 'male',
      boys: 'male',
      men: 'male',
      guys: 'male',
      dudes: 'male',
      gents: 'male',
      gentlemen: 'male'
    }
  },
  {
    id: 'gal-guy',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      person: 'a',
      friend: 'a',
      pal: 'a',
      folk: 'a',
      individual: 'a'
    },
    inconsiderate: {
      woman: 'female',
      gal: 'female',
      lady: 'female',
      babe: 'female',
      bimbo: 'female',
      chick: 'female',
      guy: 'male',
      lad: 'male',
      fellow: 'male',
      dude: 'male',
      bro: 'male',
      gentleman: 'male'
    }
  },
  {
    id: 'fatherland-motherland',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'native land': 'a',
      homeland: 'a'
    },
    inconsiderate: {
      motherland: 'female',
      fatherland: 'male'
    }
  },
  {
    id: 'father-tongue-mother-tongue',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'native tongue': 'a',
      'native language': 'a'
    },
    inconsiderate: {
      'mother tongue': 'female',
      'father tongue': 'male'
    }
  },
  {
    id: 'freshmen-freshwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'first-year students': 'a',
      freshers: 'a'
    },
    inconsiderate: {
      freshwomen: 'female',
      freshmen: 'male'
    }
  },
  {
    id: 'garbageman-garbagewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'garbage collector': 'a',
      'waste collector': 'a',
      'trash collector': 'a'
    },
    inconsiderate: {
      garbagewoman: 'female',
      garbageman: 'male'
    }
  },
  {
    id: 'garbagemen-garbagewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'garbage collectors': 'a',
      'waste collectors': 'a',
      'trash collectors': 'a'
    },
    inconsiderate: {
      garbagewomen: 'female',
      garbagemen: 'male'
    }
  },
  {
    id: 'chairman-chairwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      chair: 'a',
      head: 'a',
      chairperson: 'a',
      coordinator: 'a',
      'committee head': 'a',
      moderator: 'a',
      'presiding officer': 'a'
    },
    inconsiderate: {
      chairwoman: 'female',
      chairman: 'male'
    }
  },
  {
    id: 'committee-man-committee-woman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'committee member': 'a'
    },
    inconsiderate: {
      'committee woman': 'female',
      'committee man': 'male'
    }
  },
  {
    id: 'cowboy-cowgirl',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      cowhand: 'a'
    },
    inconsiderate: {
      cowgirl: 'female',
      cowboy: 'male'
    }
  },
  {
    id: 'cowboys-cowgirls',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      cowhands: 'a'
    },
    inconsiderate: {
      cowgirls: 'female',
      cowboys: 'male'
    }
  },
  {
    id: 'cattleman-cattlewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'cattle rancher': 'a'
    },
    inconsiderate: {
      cattlewoman: 'female',
      cattleman: 'male'
    }
  },
  {
    id: 'cattlemen-cattlewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'cattle ranchers': 'a'
    },
    inconsiderate: {
      cattlewomen: 'female',
      cattlemen: 'male'
    }
  },
  {
    id: 'chairmen-chairwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      chairs: 'a',
      chairpersons: 'a',
      coordinators: 'a'
    },
    inconsiderate: {
      chairwomen: 'female',
      chairmen: 'male'
    }
  },
  {
    id: 'postman-postwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'mail carrier': 'a',
      'letter carrier': 'a',
      'postal worker': 'a'
    },
    inconsiderate: {
      postwoman: 'female',
      mailwoman: 'female',
      postman: 'male',
      mailman: 'male'
    }
  },
  {
    id: 'postmen-postwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'mail carriers': 'a',
      'letter carriers': 'a',
      'postal workers': 'a'
    },
    inconsiderate: {
      postwomen: 'female',
      mailwomen: 'female',
      postmen: 'male',
      mailmen: 'male'
    }
  },
  {
    id: 'chick-cop-policeman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      officer: 'a',
      'police officer': 'a'
    },
    inconsiderate: {
      policewoman: 'female',
      policeman: 'male',
      'chick cop': 'female'
    }
  },
  {
    id: 'policemen-policewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      officers: 'a',
      'police officers': 'a'
    },
    inconsiderate: {
      policewomen: 'female',
      policemen: 'male'
    }
  },
  {
    id: 'steward-stewardess',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'flight attendant': 'a'
    },
    inconsiderate: {
      stewardess: 'female',
      steward: 'male'
    }
  },
  {
    id: 'stewardesses-stewards',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'flight attendants': 'a'
    },
    inconsiderate: {
      stewardesses: 'female',
      stewards: 'male'
    }
  },
  {
    id: 'congressman-congresswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'member of congress': 'a',
      'congress person': 'a',
      legislator: 'a',
      representative: 'a'
    },
    inconsiderate: {
      congresswoman: 'female',
      congressman: 'male'
    }
  },
  {
    id: 'congressmen-congresswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'members of congress': 'a',
      'congress persons': 'a',
      legislators: 'a',
      representatives: 'a'
    },
    inconsiderate: {
      congresswomen: 'female',
      congressmen: 'male'
    }
  },
  {
    id: 'fireman-firewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'fire fighter': 'a',
      'fire officer': 'a'
    },
    inconsiderate: {
      firewoman: 'female',
      fireman: 'male'
    }
  },
  {
    id: 'firemen-firewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'fire fighters': 'a'
    },
    inconsiderate: {
      firewomen: 'female',
      firemen: 'male'
    }
  },
  {
    id: 'fisherman-fisherwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      fisher: 'a',
      'crew member': 'a',
      fisherfolk: 'a',
      angler: 'a'
    },
    inconsiderate: {
      fisherwoman: 'female',
      fisherman: 'male'
    }
  },
  {
    id: 'fishermen-fisherwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      fishers: 'a'
    },
    inconsiderate: {
      fisherwomen: 'female',
      fishermen: 'male'
    }
  },
  {
    id: 'brotherhood-sisterhood',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      kinship: 'a',
      community: 'a'
    },
    inconsiderate: {
      sisterhood: 'female',
      brotherhood: 'male'
    }
  },
  {
    id: 'common-girl-common-man',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'common person': 'a',
      'average person': 'a'
    },
    inconsiderate: {
      'common girl': 'female',
      'common man': 'male'
    }
  },
  {
    id: 'salaryman-salarywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'business executive': 'a',
      entrepreneur: 'a',
      'business person': 'a',
      professional: 'a'
    },
    inconsiderate: {
      businesswoman: 'female',
      salarywoman: 'female',
      businessman: 'male',
      salaryman: 'male'
    }
  },
  {
    id: 'salarymen-salarywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'business executives': 'a',
      entrepreneurs: 'a'
    },
    inconsiderate: {
      businesswomen: 'female',
      salarywomen: 'female',
      'career girl': 'female',
      'career woman': 'female',
      businessmen: 'male',
      salarymen: 'male'
    }
  },
  {
    id: 'janitor-janitress',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      cleaner: 'a'
    },
    inconsiderate: {
      'cleaning lady': 'female',
      'cleaning girl': 'female',
      'cleaning woman': 'female',
      janitress: 'female',
      'cleaning man': 'male',
      'cleaning boy': 'male',
      janitor: 'male'
    }
  },
  {
    id: 'janitors-janitresses',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      cleaners: 'a',
      housekeeping: 'a'
    },
    inconsiderate: {
      'cleaning ladies': 'female',
      'cleaning girls': 'female',
      janitresses: 'female',
      'cleaning men': 'male',
      janitors: 'male'
    }
  },
  {
    id: 'delivery-boy-delivery-girl',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      courier: 'a',
      messenger: 'a'
    },
    inconsiderate: {
      'delivery girl': 'female',
      'delivery boy': 'male'
    }
  },
  {
    id: 'foreman-forewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      supervisor: 'a',
      'shift boss': 'a'
    },
    inconsiderate: {
      forewoman: 'female',
      foreman: 'male'
    }
  },
  {
    id: 'frontman,-front-man-frontwoman,-front-woman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      lead: 'a',
      front: 'a',
      figurehead: 'a'
    },
    inconsiderate: {
      'frontwoman, front woman': 'female',
      'frontman, front man': 'male'
    }
  },
  {
    id: 'front-men,-frontmen-front-women,-frontwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      figureheads: 'a'
    },
    inconsiderate: {
      'front women, frontwomen': 'female',
      'front men, frontmen': 'male'
    }
  },
  {
    id: 'foremen-forewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      supervisors: 'a',
      'shift bosses': 'a'
    },
    inconsiderate: {
      forewomen: 'female',
      foremen: 'male'
    }
  },
  {
    id: 'insurance-man-insurance-woman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'insurance agent': 'a'
    },
    inconsiderate: {
      'insurance woman': 'female',
      'insurance man': 'male'
    }
  },
  {
    id: 'insurance-men-insurance-women',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'insurance agents': 'a'
    },
    inconsiderate: {
      'insurance women': 'female',
      'insurance men': 'male'
    }
  },
  {
    id: 'landlady-landlord',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      proprietor: 'a',
      'building manager': 'a'
    },
    inconsiderate: {
      landlady: 'female',
      landlord: 'male'
    }
  },
  {
    id: 'landladies-landlords',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      proprietors: 'a',
      'building managers': 'a'
    },
    inconsiderate: {
      landladies: 'female',
      landlords: 'male'
    }
  },
  {
    id: 'alumna-alumnus',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      graduate: 'a'
    },
    inconsiderate: {
      alumna: 'female',
      alumnus: 'male'
    }
  },
  {
    id: 'alumnae-alumni',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      graduates: 'a'
    },
    inconsiderate: {
      alumnae: 'female',
      alumni: 'male'
    }
  },
  {
    id: 'newsman-newswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      anchor: 'a',
      journalist: 'a'
    },
    inconsiderate: {
      newswoman: 'female',
      newspaperwoman: 'female',
      anchorwoman: 'female',
      newsman: 'male',
      newspaperman: 'male',
      anchorman: 'male'
    }
  },
  {
    id: 'newsmen-newswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      anchors: 'a',
      journalists: 'a'
    },
    inconsiderate: {
      newswomen: 'female',
      newspaperwomen: 'female',
      anchorwomen: 'female',
      newsmen: 'male',
      newspapermen: 'male',
      anchormen: 'male'
    }
  },
  {
    id: 'repairman-repairwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      repairer: 'a',
      technician: 'a'
    },
    inconsiderate: {
      repairwoman: 'female',
      repairman: 'male'
    }
  },
  {
    id: 'repairmen-repairwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      technicians: 'a'
    },
    inconsiderate: {
      repairwomen: 'female',
      repairmen: 'male'
    }
  },
  {
    id: 'saleslady-salesman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      salesperson: 'a',
      'sales clerk': 'a',
      'sales rep': 'a',
      'sales agent': 'a',
      'sales attendant': 'a',
      seller: 'a',
      'shop assistant': 'a'
    },
    inconsiderate: {
      saleswoman: 'female',
      'sales woman': 'female',
      saleslady: 'female',
      salesman: 'male',
      'sales man': 'male'
    }
  },
  {
    id: 'salesmen-saleswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'sales clerks': 'a',
      'sales reps': 'a',
      'sales agents': 'a',
      sellers: 'a'
    },
    inconsiderate: {
      saleswomen: 'female',
      'sales women': 'female',
      salesladies: 'female',
      salesmen: 'male',
      'sales men': 'male'
    }
  },
  {
    id: 'serviceman-servicewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      soldier: 'a',
      'service representative': 'a'
    },
    inconsiderate: {
      servicewoman: 'female',
      serviceman: 'male'
    }
  },
  {
    id: 'servicemen-servicewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      soldiers: 'a',
      'service representatives': 'a'
    },
    inconsiderate: {
      servicewomen: 'female',
      servicemen: 'male'
    }
  },
  {
    id: 'waiter-waitress',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      server: 'a'
    },
    inconsiderate: {
      waitress: 'female',
      waiter: 'male'
    }
  },
  {
    id: 'waiters-waitresses',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      servers: 'a'
    },
    inconsiderate: {
      waitresses: 'female',
      waiters: 'male'
    }
  },
  {
    id: 'workman-workwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      worker: 'a',
      'wage earner': 'a',
      taxpayer: 'a'
    },
    inconsiderate: {
      workwoman: 'female',
      'working woman': 'female',
      workman: 'male',
      'working man': 'male'
    }
  },
  {
    id: 'workmen-workwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      workers: 'a'
    },
    inconsiderate: {
      workwomen: 'female',
      workmen: 'male'
    }
  },
  {
    id: 'actor-actress',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      performer: 'a',
      star: 'a',
      artist: 'a',
      entertainer: 'a'
    },
    inconsiderate: {
      actress: 'female',
      actor: 'male'
    }
  },
  {
    id: 'actors-actresses',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      performers: 'a',
      stars: 'a',
      artists: 'a',
      entertainers: 'a'
    },
    inconsiderate: {
      actresses: 'female',
      actors: 'male'
    }
  },
  {
    id: 'aircrewwoman-airman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      pilot: 'a',
      aviator: 'a',
      airstaff: 'a'
    },
    inconsiderate: {
      aircrewwoman: 'female',
      'aircrew woman': 'female',
      aircrewman: 'male',
      airman: 'male'
    }
  },
  {
    id: 'aircrewwomen-airmen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      pilots: 'a',
      aviators: 'a',
      airstaff: 'a'
    },
    inconsiderate: {
      aircrewwomen: 'female',
      'aircrew women': 'female',
      aircrewmen: 'male',
      airmen: 'male'
    }
  },
  {
    id: 'alderman-alderwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'cabinet member': 'a'
    },
    inconsiderate: {
      alderwoman: 'female',
      alderman: 'male'
    }
  },
  {
    id: 'aldermen-alderwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      cabinet: 'a',
      'cabinet members': 'a',
      alderperson: 'a'
    },
    inconsiderate: {
      alderwomen: 'female',
      aldermen: 'male'
    }
  },
  {
    id: 'assemblyman-assemblywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'assembly person': 'a',
      'assembly worker': 'a'
    },
    inconsiderate: {
      assemblywoman: 'female',
      assemblyman: 'male'
    }
  },
  {
    id: 'aunt-uncle',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      relative: 'a'
    },
    inconsiderate: {
      kinswoman: 'female',
      aunt: 'female',
      kinsman: 'male',
      uncle: 'male'
    }
  },
  {
    id: 'aunts-uncles',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      relatives: 'a'
    },
    inconsiderate: {
      kinswomen: 'female',
      aunts: 'female',
      kinsmen: 'male',
      uncles: 'male'
    }
  },
  {
    id: 'boogeyman-boogeywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      boogeymonster: 'a'
    },
    inconsiderate: {
      boogeywoman: 'female',
      boogeyman: 'male'
    }
  },
  {
    id: 'boogieman-boogiewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      boogeymonster: 'a'
    },
    inconsiderate: {
      boogiewoman: 'female',
      boogieman: 'male'
    }
  },
  {
    id: 'bogeyman-bogeywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bogeymonster: 'a'
    },
    inconsiderate: {
      bogeywoman: 'female',
      bogeyman: 'male'
    }
  },
  {
    id: 'bogieman-bogiewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bogeymonster: 'a'
    },
    inconsiderate: {
      bogiewoman: 'female',
      bogieman: 'male'
    }
  },
  {
    id: 'boogiemen-boogiewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      boogeymonsters: 'a'
    },
    inconsiderate: {
      boogiewomen: 'female',
      boogiemen: 'male'
    }
  },
  {
    id: 'bogiemen-bogiewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bogeymonsters: 'a'
    },
    inconsiderate: {
      bogiewomen: 'female',
      bogiemen: 'male'
    }
  },
  {
    id: 'bondsman-bondswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bonder: 'a'
    },
    inconsiderate: {
      bondswoman: 'female',
      bondsman: 'male'
    }
  },
  {
    id: 'bondsmen-bondswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bonders: 'a'
    },
    inconsiderate: {
      bondswomen: 'female',
      bondsmen: 'male'
    }
  },
  {
    id: 'husband-wife',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      partner: 'a',
      'significant other': 'a',
      spouse: 'a'
    },
    inconsiderate: {
      wife: 'female',
      husband: 'male'
    },
    note: 'Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner'
  },
  {
    id: 'husbands-wives',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      partners: 'a',
      'significant others': 'a',
      spouses: 'a'
    },
    inconsiderate: {
      wives: 'female',
      husbands: 'male'
    },
    note: 'Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner'
  },
  {
    id: 'boyfriend-girlfriend',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      partner: 'a',
      friend: 'a',
      'significant other': 'a'
    },
    inconsiderate: {
      girlfriend: 'female',
      boyfriend: 'male'
    },
    note: 'Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner'
  },
  {
    id: 'boyfriends-girlfriends',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      partners: 'a',
      friends: 'a',
      'significant others': 'a'
    },
    inconsiderate: {
      girlfriends: 'female',
      boyfriends: 'male'
    },
    note: 'Source: https://www.bustle.com/articles/108321-6-reasons-to-refer-to-your-significant-other-as-your-partner'
  },
  {
    id: 'boyhood-girlhood',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      childhood: 'a'
    },
    inconsiderate: {
      girlhood: 'female',
      boyhood: 'male'
    }
  },
  {
    id: 'boyish-girly',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      childish: 'a'
    },
    inconsiderate: {
      girly: 'female',
      girlish: 'female',
      boyish: 'male'
    }
  },
  {
    id: 'journeyman-journeywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      journeyperson: 'a'
    },
    inconsiderate: {
      journeywoman: 'female',
      journeyman: 'male'
    }
  },
  {
    id: 'journeymen-journeywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      journeypersons: 'a'
    },
    inconsiderate: {
      journeywomen: 'female',
      journeymen: 'male'
    }
  },
  {
    id: 'godfather-godmother',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      godparent: 'a',
      elder: 'a',
      patron: 'a'
    },
    inconsiderate: {
      godmother: 'female',
      patroness: 'female',
      godfather: 'male'
    }
  },
  {
    id: 'granddaughter-grandson',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      grandchild: 'a'
    },
    inconsiderate: {
      granddaughter: 'female',
      grandson: 'male'
    }
  },
  {
    id: 'granddaughters-grandsons',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      grandchildren: 'a'
    },
    inconsiderate: {
      granddaughters: 'female',
      grandsons: 'male'
    }
  },
  {
    id: 'forefather-foremother',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      ancestor: 'a'
    },
    inconsiderate: {
      foremother: 'female',
      forefather: 'male'
    }
  },
  {
    id: 'forefathers-foremothers',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      ancestors: 'a'
    },
    inconsiderate: {
      foremothers: 'female',
      forefathers: 'male'
    }
  },
  {
    id: 'gramps-granny',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      grandparent: 'a',
      ancestor: 'a'
    },
    inconsiderate: {
      granny: 'female',
      grandma: 'female',
      grandmother: 'female',
      grandpappy: 'male',
      granddaddy: 'male',
      gramps: 'male',
      grandpa: 'male',
      grandfather: 'male'
    }
  },
  {
    id: 'grandfathers-grandmothers',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      grandparents: 'a',
      ancestors: 'a'
    },
    inconsiderate: {
      grandmothers: 'female',
      grandfathers: 'male'
    }
  },
  {
    id: 'bride-groom',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      spouse: 'a',
      newlywed: 'a'
    },
    inconsiderate: {
      bride: 'female',
      groom: 'male'
    }
  },
  {
    id: 'brother-sister',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      sibling: 'a'
    },
    inconsiderate: {
      sister: 'female',
      brother: 'male'
    }
  },
  {
    id: 'brothers-sisters',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      siblings: 'a'
    },
    inconsiderate: {
      sisters: 'female',
      brothers: 'male'
    }
  },
  {
    id: 'cameraman-camerawoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'camera operator': 'a',
      'camera person': 'a'
    },
    inconsiderate: {
      camerawoman: 'female',
      cameraman: 'male'
    }
  },
  {
    id: 'cameramen-camerawomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'camera operators': 'a'
    },
    inconsiderate: {
      camerawomen: 'female',
      cameramen: 'male'
    }
  },
  {
    id: 'caveman-cavewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      troglodyte: 'a',
      hominidae: 'a'
    },
    inconsiderate: {
      cavewoman: 'female',
      caveman: 'male'
    }
  },
  {
    id: 'cavemen-cavewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      troglodytae: 'a',
      troglodyti: 'a',
      troglodytes: 'a',
      hominids: 'a'
    },
    inconsiderate: {
      cavewomen: 'female',
      cavemen: 'male'
    }
  },
  {
    id: 'clergyman-clergywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      clergyperson: 'a',
      clergy: 'a',
      cleric: 'a'
    },
    inconsiderate: {
      clergywoman: 'female',
      clergyman: 'male'
    }
  },
  {
    id: 'clergymen-clergywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      clergies: 'a',
      clerics: 'a'
    },
    inconsiderate: {
      clergywomen: 'female',
      clergymen: 'male'
    }
  },
  {
    id: 'councilman-councilwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'council member': 'a'
    },
    inconsiderate: {
      councilwoman: 'female',
      councilman: 'male'
    }
  },
  {
    id: 'councilmen-councilwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'council members': 'a'
    },
    inconsiderate: {
      councilwomen: 'female',
      councilmen: 'male'
    }
  },
  {
    id: 'countryman-countrywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'country person': 'a'
    },
    inconsiderate: {
      countrywoman: 'female',
      countryman: 'male'
    }
  },
  {
    id: 'countrymen-countrywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'country folk': 'a'
    },
    inconsiderate: {
      countrywomen: 'female',
      countrymen: 'male'
    }
  },
  {
    id: 'handyman-handywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      artisan: 'a',
      craftsperson: 'a',
      'skilled worker': 'a'
    },
    inconsiderate: {
      handywoman: 'female',
      craftswoman: 'female',
      handyman: 'male',
      craftsman: 'male'
    }
  },
  {
    id: 'host-hostess',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      presenter: 'a',
      entertainer: 'a',
      emcee: 'a'
    },
    inconsiderate: {
      hostess: 'female',
      host: 'male'
    }
  },
  {
    id: 'hostesses-hosts',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      presenters: 'a',
      entertainers: 'a',
      emcees: 'a'
    },
    inconsiderate: {
      hostesses: 'female',
      hosts: 'male'
    }
  },
  {
    id: 'handymen-handywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      artisans: 'a',
      craftspersons: 'a',
      'skilled workers': 'a'
    },
    inconsiderate: {
      handywomen: 'female',
      craftswomen: 'female',
      handymen: 'male',
      craftsmen: 'male'
    }
  },
  {
    id: 'hangman-hangwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      guillotine: 'a'
    },
    inconsiderate: {
      hangwoman: 'female',
      hangman: 'male'
    }
  },
  {
    id: 'hangmen-hangwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      guillotines: 'a'
    },
    inconsiderate: {
      hangwomen: 'female',
      hangmen: 'male'
    }
  },
  {
    id: 'henchman-henchwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      sidekick: 'a'
    },
    inconsiderate: {
      henchwoman: 'female',
      henchman: 'male'
    }
  },
  {
    id: 'henchmen-henchwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      sidekicks: 'a'
    },
    inconsiderate: {
      henchwomen: 'female',
      henchmen: 'male'
    }
  },
  {
    id: 'hero-heroine',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'role-model': 'a',
      mentor: 'a'
    },
    inconsiderate: {
      heroine: 'female',
      hero: 'male'
    }
  },
  {
    id: 'heroes-heroines',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'role-models': 'a',
      mentor: 'a'
    },
    inconsiderate: {
      heroines: 'female',
      heroes: 'male'
    }
  },
  {
    id: 'maternal-paternal',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      parental: 'a',
      warm: 'a',
      intimate: 'a'
    },
    inconsiderate: {
      maternal: 'female',
      paternal: 'male',
      fraternal: 'male'
    }
  },
  {
    id: 'maternity-paternity',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      parental: 'a'
    },
    inconsiderate: {
      maternity: 'female',
      paternity: 'male'
    }
  },
  {
    id: 'dads-moms',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      parents: 'a'
    },
    inconsiderate: {
      mamas: 'female',
      mothers: 'female',
      moms: 'female',
      mums: 'female',
      mommas: 'female',
      mommies: 'female',
      papas: 'male',
      fathers: 'male',
      dads: 'male',
      daddies: 'male'
    }
  },
  {
    id: 'dad-mom',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      parent: 'a'
    },
    inconsiderate: {
      mama: 'female',
      mother: 'female',
      mom: 'female',
      mum: 'female',
      momma: 'female',
      mommy: 'female',
      papa: 'male',
      father: 'male',
      dad: 'male',
      pop: 'male',
      daddy: 'male'
    }
  },
  {
    id: 'daughter-son',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      child: 'a'
    },
    inconsiderate: {
      daughter: 'female',
      son: 'male'
    }
  },
  {
    id: 'daughters-sons',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      children: 'a'
    },
    inconsiderate: {
      daughters: 'female',
      sons: 'male'
    }
  },
  {
    id: 'doorman-doorwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      concierge: 'a'
    },
    inconsiderate: {
      doorwoman: 'female',
      doorman: 'male'
    }
  },
  {
    id: 'doormen-doorwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      concierges: 'a'
    },
    inconsiderate: {
      doorwomen: 'female',
      doormen: 'male'
    }
  },
  {
    id: 'feminin-manly',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      humanly: 'a',
      mature: 'a'
    },
    inconsiderate: {
      feminin: 'female',
      dudely: 'male',
      manly: 'male'
    }
  },
  {
    id: 'females-males',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      humans: 'a'
    },
    inconsiderate: {
      females: 'female',
      males: 'male'
    }
  },
  {
    id: 'king-queen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      ruler: 'a'
    },
    inconsiderate: {
      empress: 'female',
      queen: 'female',
      emperor: 'male',
      king: 'male'
    }
  },
  {
    id: 'kings-queens',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      rulers: 'a'
    },
    inconsiderate: {
      empresses: 'female',
      queens: 'female',
      emperors: 'male',
      kings: 'male'
    }
  },
  {
    id: 'kingsize-queensize',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      jumbo: 'a',
      gigantic: 'a'
    },
    inconsiderate: {
      queensize: 'female',
      kingsize: 'male'
    }
  },
  {
    id: 'kingmaker-queenmaker',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'power behind the throne': 'a'
    },
    inconsiderate: {
      queenmaker: 'female',
      kingmaker: 'male'
    }
  },
  {
    id: 'layman-laywoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      civilian: 'a'
    },
    inconsiderate: {
      laywoman: 'female',
      layman: 'male'
    }
  },
  {
    id: 'laymen-laywomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      civilians: 'a'
    },
    inconsiderate: {
      laywomen: 'female',
      laymen: 'male'
    }
  },
  {
    id: 'dame-lord',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      official: 'a',
      owner: 'a',
      expert: 'a',
      superior: 'a',
      chief: 'a',
      ruler: 'a'
    },
    inconsiderate: {
      dame: 'female',
      lord: 'male'
    }
  },
  {
    id: 'dames-lords',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      officials: 'a',
      chiefs: 'a',
      rulers: 'a'
    },
    inconsiderate: {
      dames: 'female',
      lords: 'male'
    }
  },
  {
    id: 'manhood-womanhood',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      adulthood: 'a',
      personhood: 'a',
      maturity: 'a'
    },
    inconsiderate: {
      womanhood: 'female',
      masculinity: 'male',
      manhood: 'male'
    }
  },
  {
    id: 'femininity-manliness',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      humanity: 'a'
    },
    inconsiderate: {
      femininity: 'female',
      manliness: 'male'
    }
  },
  {
    id: 'marksman-markswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      shooter: 'a'
    },
    inconsiderate: {
      markswoman: 'female',
      marksman: 'male'
    }
  },
  {
    id: 'marksmen-markswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      shooters: 'a'
    },
    inconsiderate: {
      markswomen: 'female',
      marksmen: 'male'
    }
  },
  {
    id: 'middleman-middlewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      intermediary: 'a',
      'go-between': 'a'
    },
    inconsiderate: {
      middlewoman: 'female',
      middleman: 'male'
    }
  },
  {
    id: 'middlemen-middlewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      intermediaries: 'a',
      'go-betweens': 'a'
    },
    inconsiderate: {
      middlewomen: 'female',
      middlemen: 'male'
    }
  },
  {
    id: 'milkman-milkwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'milk person': 'a'
    },
    inconsiderate: {
      milkwoman: 'female',
      milkman: 'male'
    }
  },
  {
    id: 'milkmen-milkwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'milk people': 'a'
    },
    inconsiderate: {
      milkwomen: 'female',
      milkmen: 'male'
    }
  },
  {
    id: 'nephew-niece',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      nibling: 'a',
      'sibling’s child': 'a'
    },
    inconsiderate: {
      niece: 'female',
      nephew: 'male'
    }
  },
  {
    id: 'nephews-nieces',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      niblings: 'a',
      'sibling’s children': 'a'
    },
    inconsiderate: {
      nieces: 'female',
      nephews: 'male'
    }
  },
  {
    id: 'nobleman-noblewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      noble: 'a'
    },
    inconsiderate: {
      noblewoman: 'female',
      nobleman: 'male'
    }
  },
  {
    id: 'noblemen-noblewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      nobles: 'a'
    },
    inconsiderate: {
      noblewomen: 'female',
      noblemen: 'male'
    }
  },
  {
    id: 'ombudsman-ombudswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      notary: 'a',
      'consumer advocate': 'a',
      'trouble shooter': 'a',
      omsbudperson: 'a',
      mediator: 'a'
    },
    inconsiderate: {
      ombudswoman: 'female',
      ombudsman: 'male'
    }
  },
  {
    id: 'ombudsmen-ombudswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      notaries: 'a',
      omsbudpersons: 'a',
      omsbudpeople: 'a',
      mediators: 'a'
    },
    inconsiderate: {
      ombudswomen: 'female',
      ombudsmen: 'male'
    }
  },
  {
    id: 'prince-princess',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      heir: 'a'
    },
    inconsiderate: {
      princess: 'female',
      prince: 'male'
    }
  },
  {
    id: 'princes-princesses',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      heirs: 'a'
    },
    inconsiderate: {
      princesses: 'female',
      princes: 'male'
    }
  },
  {
    id: 'sandman-sandwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      fairy: 'a'
    },
    inconsiderate: {
      sandwoman: 'female',
      sandman: 'male'
    }
  },
  {
    id: 'sandmen-sandwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      fairies: 'a'
    },
    inconsiderate: {
      sandwomen: 'female',
      sandmen: 'male'
    }
  },
  {
    id: 'showman-showwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      promoter: 'a'
    },
    inconsiderate: {
      showwoman: 'female',
      showman: 'male'
    }
  },
  {
    id: 'showmen-showwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      promoters: 'a'
    },
    inconsiderate: {
      showwomen: 'female',
      'show women': 'female',
      showmen: 'male'
    }
  },
  {
    id: 'spaceman-spacewoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      astronaut: 'a'
    },
    inconsiderate: {
      spacewoman: 'female',
      spaceman: 'male'
    }
  },
  {
    id: 'spacemen-spacewomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      astronauts: 'a'
    },
    inconsiderate: {
      spacewomen: 'female',
      spacemen: 'male'
    }
  },
  {
    id: 'spokesman-spokeswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      speaker: 'a',
      spokesperson: 'a',
      representative: 'a'
    },
    inconsiderate: {
      spokeswoman: 'female',
      spokesman: 'male'
    }
  },
  {
    id: 'spokesmen-spokeswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      speakers: 'a',
      spokespersons: 'a'
    },
    inconsiderate: {
      spokeswomen: 'female',
      spokesmen: 'male'
    }
  },
  {
    id: 'sportsman-sportswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      athlete: 'a',
      'sports person': 'a'
    },
    inconsiderate: {
      sportswoman: 'female',
      sportsman: 'male'
    }
  },
  {
    id: 'sportsmen-sportswomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      athletes: 'a',
      'sports persons': 'a'
    },
    inconsiderate: {
      sportswomen: 'female',
      sportsmen: 'male'
    }
  },
  {
    id: 'statesman-stateswoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      senator: 'a'
    },
    inconsiderate: {
      stateswoman: 'female',
      statesman: 'male'
    }
  },
  {
    id: 'stepbrother-stepsister',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'step-sibling': 'a'
    },
    inconsiderate: {
      stepsister: 'female',
      stepbrother: 'male'
    }
  },
  {
    id: 'stepbrothers-stepsisters',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'step-siblings': 'a'
    },
    inconsiderate: {
      stepsisters: 'female',
      stepbrothers: 'male'
    }
  },
  {
    id: 'stepdad-stepmom',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'step-parent': 'a'
    },
    inconsiderate: {
      stepmom: 'female',
      stepmother: 'female',
      stepdad: 'male',
      stepfather: 'male'
    }
  },
  {
    id: 'stepfathers-stepmothers',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'step-parents': 'a'
    },
    inconsiderate: {
      stepmothers: 'female',
      stepfathers: 'male'
    }
  },
  {
    id: 'superman-superwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      titan: 'a'
    },
    inconsiderate: {
      superwoman: 'female',
      superman: 'male'
    }
  },
  {
    id: 'supermen-superwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      titans: 'a'
    },
    inconsiderate: {
      superwomen: 'female',
      supermen: 'male'
    }
  },
  {
    id: 'unmanly-unwomanly',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      inhumane: 'a'
    },
    inconsiderate: {
      unwomanly: 'female',
      unwomenly: 'female',
      unmanly: 'male',
      unmenly: 'male'
    }
  },
  {
    id: 'watchman-watchwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      watcher: 'a'
    },
    inconsiderate: {
      watchwoman: 'female',
      watchman: 'male'
    }
  },
  {
    id: 'watchmen-watchwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      watchers: 'a'
    },
    inconsiderate: {
      watchwomen: 'female',
      watchmen: 'male'
    }
  },
  {
    id: 'weatherman-weatherwoman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'weather forecaster': 'a',
      meteorologist: 'a'
    },
    inconsiderate: {
      weatherwoman: 'female',
      weatherman: 'male'
    }
  },
  {
    id: 'weathermen-weatherwomen',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'weather forecasters': 'a',
      meteorologists: 'a'
    },
    inconsiderate: {
      weatherwomen: 'female',
      weathermen: 'male'
    }
  },
  {
    id: 'widow-widower',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      bereaved: 'a'
    },
    inconsiderate: {
      widow: 'female',
      widows: 'female',
      widower: 'male',
      widowers: 'male'
    }
  },
  {
    id: 'own-man-own-woman',
    type: 'or',
    categories: ['female', 'male'],
    considerate: {
      'own person': 'a'
    },
    inconsiderate: {
      'own woman': 'female',
      'own man': 'male'
    }
  },
  {
    id: 'frenchmen',
    type: 'basic',
    categories: ['male'],
    considerate: {
      french: 'a',
      'the french': 'a'
    },
    inconsiderate: {
      frenchmen: 'male'
    }
  },
  {
    id: 'ladylike',
    type: 'basic',
    categories: ['female'],
    considerate: {
      courteous: 'a',
      cultured: 'a'
    },
    inconsiderate: {
      ladylike: 'female'
    }
  },
  {
    id: 'like-a-man',
    type: 'basic',
    categories: ['male'],
    considerate: {
      resolutely: 'a',
      bravely: 'a'
    },
    inconsiderate: {
      'like a man': 'male'
    }
  },
  {
    id: 'maiden-name',
    type: 'basic',
    categories: ['female'],
    considerate: {
      'birth name': 'a'
    },
    inconsiderate: {
      'maiden name': 'female'
    }
  },
  {
    id: 'maiden-voyage',
    type: 'basic',
    categories: ['female'],
    considerate: {
      'first voyage': 'a'
    },
    inconsiderate: {
      'maiden voyage': 'female'
    }
  },
  {
    id: 'maiden-flight',
    type: 'basic',
    categories: ['female'],
    considerate: {
      'first flight': 'a'
    },
    inconsiderate: {
      'maiden flight': 'female'
    }
  },
  {
    id: 'man-enough',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'strong enough': 'a'
    },
    inconsiderate: {
      'man enough': 'male'
    }
  },
  {
    id: 'oneupmanship',
    type: 'basic',
    categories: ['male'],
    considerate: {
      upstaging: 'a',
      competitiveness: 'a'
    },
    inconsiderate: {
      oneupmanship: 'male'
    }
  },
  {
    id: 'mrs-',
    type: 'basic',
    categories: ['female'],
    considerate: {
      'ms.': 'a'
    },
    inconsiderate: {
      'miss.': 'female',
      'mrs.': 'female'
    }
  },
  {
    id: 'manmade',
    type: 'basic',
    categories: ['male'],
    considerate: {
      manufactured: 'a',
      artificial: 'a',
      synthetic: 'a',
      'machine-made': 'a',
      constructed: 'a'
    },
    inconsiderate: {
      manmade: 'male'
    }
  },
  {
    id: 'man-of-action',
    type: 'basic',
    categories: ['male'],
    considerate: {
      dynamo: 'a'
    },
    inconsiderate: {
      'man of action': 'male'
    }
  },
  {
    id: 'man-of-letters',
    type: 'basic',
    categories: ['male'],
    considerate: {
      scholar: 'a',
      writer: 'a',
      'literary figure': 'a'
    },
    inconsiderate: {
      'man of letters': 'male'
    }
  },
  {
    id: 'man-of-the-world',
    type: 'basic',
    categories: ['male'],
    considerate: {
      sophisticate: 'a'
    },
    inconsiderate: {
      'man of the world': 'male'
    }
  },
  {
    id: 'fellowship',
    type: 'basic',
    categories: ['male'],
    considerate: {
      camaraderie: 'a',
      community: 'a',
      organization: 'a'
    },
    inconsiderate: {
      fellowship: 'male'
    }
  },
  {
    id: 'freshman',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'first-year student': 'a',
      fresher: 'a'
    },
    inconsiderate: {
      freshman: 'male',
      freshwoman: 'male'
    }
  },
  {
    id: 'workmanship',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'quality construction': 'a',
      expertise: 'a'
    },
    inconsiderate: {
      workmanship: 'male'
    }
  },
  {
    id: 'housewife',
    type: 'basic',
    categories: ['female'],
    considerate: {
      homemaker: 'a',
      homeworker: 'a'
    },
    inconsiderate: {
      housewife: 'female'
    }
  },
  {
    id: 'housewives',
    type: 'basic',
    categories: ['female'],
    considerate: {
      homemakers: 'a',
      homeworkers: 'a'
    },
    inconsiderate: {
      housewives: 'female'
    }
  },
  {
    id: 'motherly',
    type: 'basic',
    categories: ['female'],
    considerate: {
      loving: 'a',
      warm: 'a',
      nurturing: 'a'
    },
    inconsiderate: {
      motherly: 'female'
    }
  },
  {
    id: 'manpower',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'human resources': 'a',
      workforce: 'a',
      personnel: 'a',
      staff: 'a',
      labor: 'a',
      'labor force': 'a',
      staffing: 'a',
      'combat personnel': 'a'
    },
    inconsiderate: {
      manpower: 'male'
    }
  },
  {
    id: 'master-of-ceremonies',
    type: 'basic',
    categories: ['male'],
    considerate: {
      emcee: 'a',
      moderator: 'a',
      convenor: 'a'
    },
    inconsiderate: {
      'master of ceremonies': 'male'
    }
  },
  {
    id: 'masterful',
    type: 'basic',
    categories: ['male'],
    considerate: {
      skilled: 'a',
      authoritative: 'a',
      commanding: 'a'
    },
    inconsiderate: {
      masterful: 'male'
    }
  },
  {
    id: 'mastermind',
    type: 'basic',
    categories: ['male'],
    considerate: {
      genius: 'a',
      creator: 'a',
      instigator: 'a',
      oversee: 'a',
      launch: 'a',
      originate: 'a'
    },
    inconsiderate: {
      mastermind: 'male'
    }
  },
  {
    id: 'masterpiece',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'work of genius': 'a',
      'chef d’oeuvre': 'a'
    },
    inconsiderate: {
      masterpiece: 'male'
    }
  },
  {
    id: 'masterplan',
    type: 'basic',
    categories: ['male'],
    considerate: {
      vision: 'a',
      'comprehensive plan': 'a'
    },
    inconsiderate: {
      masterplan: 'male'
    }
  },
  {
    id: 'masterstroke',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'trump card': 'a',
      'stroke of genius': 'a'
    },
    inconsiderate: {
      masterstroke: 'male'
    }
  },
  {
    id: 'madman',
    type: 'basic',
    categories: ['male'],
    considerate: {
      fanatic: 'a',
      zealot: 'a',
      enthusiast: 'a'
    },
    inconsiderate: {
      madman: 'male',
      'mad man': 'male'
    }
  },
  {
    id: 'madmen',
    type: 'basic',
    categories: ['male'],
    considerate: {
      fanatics: 'a',
      zealots: 'a',
      enthusiasts: 'a'
    },
    inconsiderate: {
      madmen: 'male',
      'mad men': 'male'
    }
  },
  {
    id: 'mankind',
    type: 'basic',
    categories: ['male'],
    considerate: {
      humankind: 'a'
    },
    inconsiderate: {
      mankind: 'male'
    }
  },
  {
    id: 'manhour',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'staff hour': 'a',
      'hour of work': 'a'
    },
    inconsiderate: {
      manhour: 'male',
      'man hour': 'male'
    }
  },
  {
    id: 'manhours',
    type: 'basic',
    categories: ['male'],
    considerate: {
      'staff hours': 'a',
      'hours of work': 'a',
      'hours of labor': 'a',
      hours: 'a'
    },
    inconsiderate: {
      manhours: 'male',
      'man hours': 'male'
    }
  },
  {
    id: 'manned',
    type: 'basic',
    categories: ['a'],
    considerate: {
      staffed: 'a',
      crewed: 'a',
      piloted: 'a'
    },
    inconsiderate: {
      manned: 'a'
    },
    note: 'Using gender neutral language means users will help to break up gender stereotypes.'
  },
  {
    id: 'unmanned',
    type: 'basic',
    categories: ['a'],
    considerate: {
      robotic: 'a',
      automated: 'a'
    },
    inconsiderate: {
      unmanned: 'a'
    },
    note: 'Using gender neutral language means users will help to break up gender stereotypes.'
  },
  {
    id: 'moaning',
    type: 'basic',
    categories: ['a'],
    considerate: {
      whining: 'a',
      complaining: 'a',
      crying: 'a'
    },
    inconsiderate: {
      bitching: 'a',
      moaning: 'a'
    }
  },
  {
    id: 'moan',
    type: 'basic',
    categories: ['a'],
    considerate: {
      whine: 'a',
      complain: 'a',
      cry: 'a'
    },
    inconsiderate: {
      bitch: 'a',
      moan: 'a'
    }
  },
  {
    id: 'wifebeater',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'tank top': 'a',
      'sleeveless undershirt': 'a'
    },
    inconsiderate: {
      'wife beater': 'a',
      wifebeater: 'a'
    }
  },
  {
    id: 'ancient-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'ancient civilization': 'a',
      'ancient people': 'a'
    },
    inconsiderate: {
      'ancient man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'authoress',
    type: 'basic',
    categories: ['a'],
    considerate: {
      author: 'a',
      writer: 'a'
    },
    inconsiderate: {
      authoress: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'average-housewife',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'average consumer': 'a',
      'average household': 'a',
      'average homemaker': 'a'
    },
    inconsiderate: {
      'average housewife': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'average-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'average person': 'a'
    },
    inconsiderate: {
      'average man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'average-working-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'average wage earner': 'a',
      'average taxpayer': 'a'
    },
    inconsiderate: {
      'average working man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'aviatrix',
    type: 'basic',
    categories: ['a'],
    considerate: {
      aviator: 'a'
    },
    inconsiderate: {
      aviatrix: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'brotherhood-of-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'the human family': 'a'
    },
    inconsiderate: {
      'brotherhood of man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'calendar-girl',
    type: 'basic',
    categories: ['a'],
    considerate: {
      model: 'a'
    },
    inconsiderate: {
      'calendar girl': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'call-girl',
    type: 'basic',
    categories: ['a'],
    considerate: {
      escort: 'a',
      prostitute: 'a',
      'sex worker': 'a'
    },
    inconsiderate: {
      'call girl': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'churchman',
    type: 'basic',
    categories: ['a'],
    considerate: {
      cleric: 'a',
      'practicing Christian': 'a',
      'pillar of the Church': 'a'
    },
    inconsiderate: {
      churchman: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'english-master',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'english coordinator': 'a',
      'senior teacher of english': 'a'
    },
    inconsiderate: {
      'english master': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'englishmen',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'the english': 'a'
    },
    inconsiderate: {
      englishmen: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'executrix',
    type: 'basic',
    categories: ['a'],
    considerate: {
      executor: 'a'
    },
    inconsiderate: {
      executrix: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'father-of-*',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'founder of': 'a'
    },
    inconsiderate: {
      'father of *': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'founding-father',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'the founders': 'a',
      'founding leaders': 'a',
      forebears: 'a'
    },
    inconsiderate: {
      'founding father': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'housemaid',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'house worker': 'a',
      'domestic help': 'a'
    },
    inconsiderate: {
      housemaid: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'industrial-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'industrial civilization': 'a',
      'industrial people': 'a'
    },
    inconsiderate: {
      'industrial man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'lady-doctor',
    type: 'basic',
    categories: ['a'],
    considerate: {
      doctor: 'a'
    },
    inconsiderate: {
      'lady doctor': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'leading-lady',
    type: 'basic',
    categories: ['a'],
    considerate: {
      lead: 'a'
    },
    inconsiderate: {
      'leading lady': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'maiden',
    type: 'basic',
    categories: ['a'],
    considerate: {
      virgin: 'a'
    },
    inconsiderate: {
      maiden: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'maiden-race',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'first race': 'a'
    },
    inconsiderate: {
      'maiden race': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'maiden-speech',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'first speech': 'a'
    },
    inconsiderate: {
      'maiden speech': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'man-a-desk',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'staff a desk': 'a'
    },
    inconsiderate: {
      'man a desk': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'man-in-the-street',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'ordinary citizen': 'a',
      'typical person': 'a',
      'average person': 'a'
    },
    inconsiderate: {
      'man in the street': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'man-of-the-land',
    type: 'basic',
    categories: ['a'],
    considerate: {
      farmer: 'a',
      'rural worker': 'a',
      grazier: 'a',
      landowner: 'a',
      'rural community': 'a',
      'country people': 'a',
      'country folk': 'a'
    },
    inconsiderate: {
      'man of the land': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'mans-best-friend',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'a faithful dog': 'a'
    },
    inconsiderate: {
      'mans best friend': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'man-the-booth',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'staff the booth': 'a'
    },
    inconsiderate: {
      'man the booth': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'man-the-phones',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'answer the phones': 'a'
    },
    inconsiderate: {
      'man the phones': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'mansized-task',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'a demanding task': 'a',
      'a big job': 'a'
    },
    inconsiderate: {
      'mansized task': 'a',
      'man sized task': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'master-key',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'pass key': 'a',
      original: 'a'
    },
    inconsiderate: {
      'master key': 'a',
      'master copy': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'master-plan',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'grand scheme': 'a',
      'guiding principles': 'a'
    },
    inconsiderate: {
      'master plan': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'master-the-art',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'become skilled': 'a'
    },
    inconsiderate: {
      'master the art': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'men-of-science',
    type: 'basic',
    categories: ['a'],
    considerate: {
      scientists: 'a'
    },
    inconsiderate: {
      'men of science': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'midwife',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'birthing nurse': 'a'
    },
    inconsiderate: {
      midwife: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'modern-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'modern civilization': 'a',
      'modern people': 'a'
    },
    inconsiderate: {
      'modern man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'no-mans-land',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'unoccupied territory': 'a',
      wasteland: 'a',
      deathtrap: 'a'
    },
    inconsiderate: {
      'no mans land': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'office-girls',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'administrative staff': 'a'
    },
    inconsiderate: {
      'office girls': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'poetess',
    type: 'basic',
    categories: ['a'],
    considerate: {
      poet: 'a'
    },
    inconsiderate: {
      poetess: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'railwayman',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'railway worker': 'a'
    },
    inconsiderate: {
      railwayman: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'sportsmanlike',
    type: 'basic',
    categories: ['a'],
    considerate: {
      fair: 'a',
      sporting: 'a'
    },
    inconsiderate: {
      sportsmanlike: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'sportsmanship',
    type: 'basic',
    categories: ['a'],
    considerate: {
      fairness: 'a',
      'good humor': 'a',
      'sense of fair play': 'a'
    },
    inconsiderate: {
      sportsmanship: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'statesmanlike',
    type: 'basic',
    categories: ['a'],
    considerate: {
      diplomatic: 'a'
    },
    inconsiderate: {
      statesmanlike: 'a',
      'statesman like': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'stockman',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'cattle worker': 'a',
      farmhand: 'a',
      drover: 'a'
    },
    inconsiderate: {
      stockman: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'tradesmans-entrance',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'service entrance': 'a'
    },
    inconsiderate: {
      'tradesmans entrance': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'tax-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'tax commissioner': 'a',
      'tax office': 'a',
      'tax collector': 'a'
    },
    inconsiderate: {
      'tax man': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'usherette',
    type: 'basic',
    categories: ['a'],
    considerate: {
      usher: 'a'
    },
    inconsiderate: {
      usherette: 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'woman-lawyer',
    type: 'basic',
    categories: ['a'],
    considerate: {
      lawyer: 'a'
    },
    inconsiderate: {
      'woman lawyer': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'woman-painter',
    type: 'basic',
    categories: ['a'],
    considerate: {
      painter: 'a'
    },
    inconsiderate: {
      'woman painter': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'working-wife',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'wage or salary earning woman': 'a',
      'two-income family': 'a'
    },
    inconsiderate: {
      'working mother': 'a',
      'working wife': 'a'
    },
    note: 'Source: https://radyananda.wordpress.com/2009/06/06/nonsexist-alternative-language-handbook-for-conscious-writers/'
  },
  {
    id: 'homosexual',
    type: 'basic',
    categories: ['a'],
    considerate: {
      gay: 'a',
      'gay man': 'a',
      lesbian: 'a',
      'gay person/people': 'a'
    },
    inconsiderate: {
      homosexual: 'a'
    },
    note: 'This term has a clinical history and is used to imply LGBTQ+ people are diseased or psychologically/emotionally disordered (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'homosexual-relations',
    type: 'basic',
    categories: ['a'],
    considerate: {
      relationship: 'a'
    },
    inconsiderate: {
      'homosexual relations': 'a',
      'homosexual relationship': 'a'
    },
    note: 'Avoid labeling something as LGBTQ+ unless you would call the same thing “straight” (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'homosexual-couple',
    type: 'basic',
    categories: ['a'],
    considerate: {
      couple: 'a'
    },
    inconsiderate: {
      'homosexual couple': 'a'
    },
    note: 'Avoid labeling something as LGBTQ+ unless you would call the same thing “straight” (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'sexual-preference',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'sexual orientation': 'a',
      orientation: 'a'
    },
    inconsiderate: {
      'sexual preference': 'a'
    },
    note: 'Implies that being LGBTQ+ is a choice (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'gay-lifestyle',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'gay lives': 'a',
      'gay/lesbian lives': 'a'
    },
    inconsiderate: {
      'gay lifestyle': 'a',
      'homosexual lifestyle': 'a'
    },
    note: 'Implies that being LGBTQ+ is a choice (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'gay-agenda',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'gay issues': 'a'
    },
    inconsiderate: {
      'gay agenda': 'a',
      'homosexual agenda': 'a'
    },
    note: 'Used by anti-LGBTQ+ extremists to create a climate of fear around LGBTQ+ issues (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'gay-rights',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'equal rights': 'a',
      'civil rights for gay people': 'a'
    },
    inconsiderate: {
      'special rights': 'a',
      'gay rights': 'a'
    },
    note: 'LGBTQ+ rights are human rights (source: https://www.glaad.org/reference/style)'
  },
  {
    id: 'fag',
    type: 'basic',
    categories: ['a'],
    considerate: {
      gay: 'a'
    },
    inconsiderate: {
      fag: 'a',
      faggot: 'a',
      dyke: 'a',
      homo: 'a',
      sodomite: 'a'
    },
    note: 'Derogatory terms for LGBTQ+ people are offensive (source: https://www.glaad.org/reference/offensive)'
  },
  {
    id: 'bi',
    type: 'basic',
    categories: ['a'],
    considerate: {
      bisexual: 'a'
    },
    inconsiderate: {
      bi: 'a'
    },
    note: 'Avoid using slang shorthand (source: https://www.glaad.org/reference/style)'
  },
  {
    id: 'homosexual-marriage',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'gay marriage': 'a',
      'same-sex marriage': 'a'
    },
    inconsiderate: {
      'homosexual marriage': 'a'
    },
    note: 'Homosexual has a clinical history and is used to imply LGBTQ+ people are diseased or psychologically/emotionally disordered (source: https://www.glaad.org/reference/style)'
  },
  {
    id: 'tranny',
    type: 'basic',
    categories: ['a'],
    considerate: {
      transgender: 'a'
    },
    inconsiderate: {
      tranny: 'a'
    },
    note: 'Derogatory terms for LGBTQ+ people are offensive (source: https://www.glaad.org/reference/style)'
  },
  {
    id: 'transvestite',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'cross-dresser': 'a'
    },
    inconsiderate: {
      transvestite: 'a'
    },
    note: 'Avoid using outdated / offensive terms (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'sexchange',
    type: 'basic',
    categories: ['a'],
    considerate: {
      transition: 'a',
      'gender confirmation surgery': 'a'
    },
    inconsiderate: {
      sexchange: 'a',
      'sex change': 'a'
    },
    note: 'Avoid overemphasizing surgery when discussing transgender people or the process of transition - it’s not a necessary component (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'sex-change-operation',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'sex reassignment surgery': 'a',
      'gender confirmation surgery': 'a'
    },
    inconsiderate: {
      'sex change operation': 'a'
    },
    note: 'Shift focus away from the assigned sex and towards the identified gender (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'transgenders',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'transgender people': 'a'
    },
    inconsiderate: {
      transgenders: 'a'
    },
    note: 'Transgender should be used as an adjective, not as a noun (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'transgendered',
    type: 'basic',
    categories: ['a'],
    considerate: {
      transgender: 'a'
    },
    inconsiderate: {
      transgendered: 'a'
    },
    note: 'Transgender is already an adjective (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'transgenderism',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'being transgender': 'a',
      'the movement for transgender equality': 'a'
    },
    inconsiderate: {
      transgenderism: 'a'
    },
    note: 'This is a term used by anti-transgender activists to dehumanize transgender people and reduce who they are to a condition (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'born-a-man',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'assigned male at birth': 'a',
      'designated male at birth': 'a'
    },
    inconsiderate: {
      'biologically male': 'a',
      'born a man': 'a',
      'genetically male': 'a'
    },
    note: 'Assigned birth gender is complicated; gender identity is more than what your parents decided you were at birth'
  },
  {
    id: 'born-a-woman',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'assigned female at birth': 'a',
      'designated female at birth': 'a'
    },
    inconsiderate: {
      'biologically female': 'a',
      'born a woman': 'a',
      'genetically female': 'a'
    },
    note: 'Assigned birth gender is complicated; gender identity is more than what your parents decided you were at birth'
  },
  {
    id: 'bathroom-bill',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'non-discrimination law': 'a',
      'non-discrimination ordinance': 'a'
    },
    inconsiderate: {
      'bathroom bill': 'a'
    },
    note: 'A term created and used by far-right extremists to oppose nondiscrimination laws that protect transgender people (source: https://www.glaad.org/reference/transgender)'
  },
  {
    id: 'hermaphroditic',
    type: 'basic',
    categories: ['a'],
    considerate: {
      intersex: 'a'
    },
    inconsiderate: {
      hermaphroditic: 'a',
      pseudohermaphroditic: 'a',
      'pseudo hermaphroditic': 'a'
    },
    note: 'These terms are stigmatizing to patients and their families because intersex status is more complicated than the mere presence or absence of certain gonadal tissues (source: http://www.isna.org/node/979)'
  },
  {
    id: 'hermaphrodite',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person who is intersex': 'a',
      person: 'a',
      'intersex person': 'a'
    },
    inconsiderate: {
      hermaphrodite: 'a',
      pseudohermaphrodite: 'a',
      'pseudo hermaphrodite': 'a'
    },
    note: 'These terms are stigmatizing to patients and their families because intersex status is more complicated than the mere presence or absence of certain gonadal tissues (source: http://www.isna.org/node/979)'
  },
  {
    id: 'heshe',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'transgender person': 'a',
      person: 'a'
    },
    inconsiderate: {
      shemale: 'a',
      'she male': 'a',
      heshe: 'a',
      shehe: 'a'
    },
    note: 'This word dehumanizes transgender people (source: https://www.reddit.com/r/asktransgender/comments/23wbq1/is_the_term_shemale_seen_as_offensive/)'
  },
  {
    id: 'gender-pronoun',
    type: 'basic',
    categories: ['a'],
    considerate: {
      pronoun: 'a',
      pronouns: 'a'
    },
    inconsiderate: {
      'preferred pronoun': 'a',
      'preferred pronouns': 'a',
      'gender pronoun': 'a',
      'gender pronouns': 'a'
    },
    note: "Preferred pronoun sounds like it is optional to use someone's correct pronoun (source: https://www.selfdefined.app/definitions/pronouns/)"
  },
  {
    id: 'islamist',
    type: 'basic',
    categories: ['a'],
    considerate: {
      muslim: 'a',
      'person of Islamic faith': 'a',
      fanatic: 'a',
      zealot: 'a',
      'follower of islam': 'a',
      'follower of the islamic faith': 'a'
    },
    inconsiderate: {
      islamist: 'a'
    },
    note: 'Source: https://www.usnews.com/news/newsgram/articles/2013/04/04/the-associated-press-revises-islamist-another-politically-charged-term'
  },
  {
    id: 'islamists',
    type: 'basic',
    categories: ['a'],
    considerate: {
      muslims: 'a',
      'people of Islamic faith': 'a',
      fanatics: 'a',
      zealots: 'a'
    },
    inconsiderate: {
      islamists: 'a'
    },
    note: 'Source: https://www.usnews.com/news/newsgram/articles/2013/04/04/the-associated-press-revises-islamist-another-politically-charged-term'
  },
  {
    id: 'master',
    type: 'basic',
    categories: ['a'],
    considerate: {
      primary: 'a',
      lead: 'a',
      hub: 'a',
      reference: 'a'
    },
    inconsiderate: {
      master: 'a'
    },
    note: 'Avoid using the term `master`; these suggestions are for the computer term, but there are better alternatives for other cases too'
  },
  {
    id: 'masters',
    type: 'basic',
    categories: ['a'],
    considerate: {
      primaries: 'a',
      hubs: 'a',
      references: 'a'
    },
    inconsiderate: {
      masters: 'a'
    },
    note: 'Avoid using the term `master`; these suggestions are for the computer term, but there are better alternatives for other cases too'
  },
  {
    id: 'slave',
    type: 'basic',
    categories: ['a'],
    considerate: {
      secondary: 'a',
      worker: 'a',
      replica: 'a',
      node: 'a'
    },
    inconsiderate: {
      slave: 'a'
    },
    note: 'Avoid using the term `slave`; these suggestions are for the computer term, but there are better alternatives for other cases too'
  },
  {
    id: 'slaves',
    type: 'basic',
    categories: ['a'],
    considerate: {
      secondaries: 'a',
      workers: 'a',
      replicas: 'a',
      nodes: 'a'
    },
    inconsiderate: {
      slaves: 'a'
    },
    note: 'Avoid using the term `slave`; these suggestions are for the computer term, but there are better alternatives for other cases too'
  },
  {
    id: 'blackhat',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'unethical hacker': 'a',
      'malicious actor': 'a'
    },
    inconsiderate: {
      blackhat: 'a'
    }
  },
  {
    id: 'whitehat',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'ethical hacker': 'a',
      'security researcher': 'a'
    },
    inconsiderate: {
      whitehat: 'a'
    }
  },
  {
    id: 'eskimo',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Inuit: 'a'
    },
    inconsiderate: {
      eskimo: 'a'
    }
  },
  {
    id: 'eskimos',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Inuits: 'a'
    },
    inconsiderate: {
      eskimos: 'a'
    }
  },
  {
    id: 'oriental',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Asian person': 'a'
    },
    inconsiderate: {
      oriental: 'a'
    }
  },
  {
    id: 'orientals',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Asian people': 'a'
    },
    inconsiderate: {
      orientals: 'a'
    }
  },
  {
    id: 'nonwhite',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'person of color': 'a',
      'people of color': 'a'
    },
    inconsiderate: {
      nonwhite: 'a',
      'non white': 'a'
    }
  },
  {
    id: 'ghetto',
    type: 'basic',
    categories: ['a'],
    considerate: {
      projects: 'a',
      urban: 'a'
    },
    inconsiderate: {
      ghetto: 'a'
    }
  },
  {
    id: 'redskin',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Native American': 'a'
    },
    inconsiderate: {
      'red indian': 'a',
      pocahontas: 'a',
      redskin: 'a'
    }
  },
  {
    id: 'redskins',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Native American People': 'a'
    },
    inconsiderate: {
      'red indians': 'a',
      redskins: 'a'
    }
  },
  {
    id: 'totem',
    type: 'basic',
    categories: ['a'],
    considerate: {
      favorite: 'a',
      inspiration: 'a',
      'personal interest': 'a',
      'personality type': 'a'
    },
    inconsiderate: {
      'animal spirit': 'a',
      'dream catcher': 'a',
      'spirit animal': 'a',
      totem: 'a'
    },
    note: 'Avoid using terms that oversimplify the complex and varied beliefs of indigenous religions. (source: https://www.worldreligionnews.com/opinion/spirit-animal-not-joke-oppression,https://www.spiralnature.com/spirituality/spirit-animal-cultural-appropriation)'
  },
  {
    id: 'long-time-no-see',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'I haven’t seen you in a long time': 'a',
      'it’s been a long time': 'a'
    },
    inconsiderate: {
      'long time no hear': 'a',
      'long time no see': 'a'
    },
    note: 'Avoid using phrases that implicitly mock people with limited knowledge of the English language. (source: https://www.npr.org/sections/codeswitch/2014/03/09/288300303/who-first-said-long-time-no-see-and-in-which-language)'
  },
  {
    id: 'indian-country',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'enemy territory': 'a'
    },
    inconsiderate: {
      'Indian country': 'a'
    },
    note: 'Avoid using phrases referring to the genocidal United States “Indian Removal” laws. (source: https://newsmaven.io/indiancountrytoday/archive/off-the-reservation-a-teachable-moment-nW1d7U0JRkOszhtg8N1V1A/)'
  },
  {
    id: 'off-reserve',
    type: 'basic',
    categories: ['a'],
    considerate: {
      disobey: 'a',
      endure: 'a',
      'object to': 'a',
      oppose: 'a',
      resist: 'a'
    },
    inconsiderate: {
      'jump the reservation': 'a',
      'off reserve': 'a',
      'off the reservation': 'a'
    },
    note: 'Avoid using phrases referring to the genocidal United States “Indian Removal” laws. (source: http://blog.nativepartnership.org/off-the-reservation/,https://www.wsj.com/articles/off-the-reservation-is-a-phrase-with-a-dark-past-1462552837,https://www.npr.org/sections/codeswitch/2014/06/29/326690947/should-saying-someone-is-off-the-reservation-be-off-limits,https://nowtoronto.com/news/native-references-and-terms-that-are-offensive-to-indigenous-people/)'
  },
  {
    id: 'on-the-warpath',
    type: 'basic',
    categories: ['a'],
    considerate: {
      defend: 'a'
    },
    inconsiderate: {
      'circle the wagons': 'a',
      'on the warpath': 'a'
    },
    note: 'Avoid using phrases referring to colonial stereotypes regarding Native Americans. (source: https://idioms.thefreedictionary.com/circle+the+wagons,https://idioms.thefreedictionary.com/go+on+the+warpath)'
  },
  {
    id: 'too-many-chiefs',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'too many chefs in the kitchen': 'a',
      'too many cooks spoil the broth': 'a'
    },
    inconsiderate: {
      'too many chiefs': 'a'
    },
    note: 'Avoid using phrases referring to colonial stereotypes regarding Native Americans. (source: https://idioms.thefreedictionary.com/too+many+chiefs+and+not+enough+Indians)'
  },
  {
    id: 'natives-are-restless',
    type: 'basic',
    categories: ['a'],
    considerate: {
      dissatisfied: 'a',
      frustrated: 'a'
    },
    inconsiderate: {
      'natives are restless': 'a',
      'natives are becoming restless': 'a',
      'natives are getting restless': 'a',
      'natives are growing restless': 'a'
    },
    note: 'Avoid using phrases referring to colonial stereotypes regarding indigenous peoples. (source: https://tvtropes.org/pmwiki/pmwiki.php/Main/TheNativesAreRestless)'
  },
  {
    id: 'powwow',
    type: 'basic',
    categories: ['a'],
    considerate: {
      conference: 'a',
      gathering: 'a',
      meeting: 'a'
    },
    inconsiderate: {
      'pow wow': 'a',
      powwow: 'a'
    },
    note: 'Avoid casually using this term, which refers to traditional indigenous celebration ceremonies that were banned by genocidal laws in the United States and Canada — Native people died fighting for this right. (source: https://twitter.com/chadloder/status/1203507070772793345,http://nativeappropriations.com/2012/09/paul-frank-offends-every-native-person-on-the-planet-with-fashion-night-out-dream-catchin-pow-wow.html,https://www.britannica.com/topic/powwow,https://nowtoronto.com/news/native-references-and-terms-that-are-offensive-to-indigenous-people/)'
  },
  {
    id: 'indian-give',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'go back on one’s offer': 'a'
    },
    inconsiderate: {
      'indian give': 'a',
      'indian giver': 'a'
    },
    note: 'Avoid using phrases referring to colonial stereotypes regarding Native Americans.'
  },
  {
    id: 'pinoys',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Filipinos: 'a',
      'Filipino people': 'a'
    },
    inconsiderate: {
      pinoys: 'a',
      pinays: 'a'
    }
  },
  {
    id: 'towel-heads',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Arabs: 'a',
      'Middle Eastern People': 'a'
    },
    inconsiderate: {
      'sand niggers': 'a',
      'towel heads': 'a'
    }
  },
  {
    id: 'latino',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Latinx: 'a'
    },
    inconsiderate: {
      latino: 'a',
      latina: 'a'
    },
    note: 'Whenever possible, try to be gender inclusive.'
  },
  {
    id: 'japs',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Japanese person': 'a',
      'Japanese people': 'a'
    },
    inconsiderate: {
      japs: 'a'
    }
  },
  {
    id: 'hymie',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'Jewish person': 'a'
    },
    inconsiderate: {
      shlomo: 'a',
      shyster: 'a',
      hymie: 'a'
    }
  },
  {
    id: 'goy',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'a person who is not Jewish': 'a',
      'not Jewish': 'a'
    },
    inconsiderate: {
      goyim: 'a',
      goyum: 'a',
      goy: 'a'
    }
  },
  {
    id: 'spade',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'a Black person': 'a'
    },
    inconsiderate: {
      spade: 'a'
    }
  },
  {
    id: 'gyp',
    type: 'basic',
    categories: ['a'],
    considerate: {
      Nomad: 'a',
      Traveler: 'a',
      Roma: 'a',
      Romani: 'a'
    },
    inconsiderate: {
      gyppo: 'a',
      gypsy: 'a',
      Gipsy: 'a',
      gyp: 'a'
    },
    note: 'Gypsy is insensitive, use Roma or Romani. They’re not Egyptian as the name suggests. (source: en.wikipedia.org/wiki/Romani_people#cite_ref-80)'
  },
  {
    id: 'blacklist',
    type: 'basic',
    categories: ['a'],
    considerate: {
      blocklist: 'a',
      wronglist: 'a',
      banlist: 'a',
      'deny list': 'a'
    },
    inconsiderate: {
      blacklist: 'a',
      'black list': 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'blacklisted',
    type: 'basic',
    categories: ['a'],
    considerate: {
      blocklisted: 'a',
      wronglisted: 'a',
      banlisted: 'a',
      'deny-listed': 'a'
    },
    inconsiderate: {
      blacklisted: 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'blacklisting',
    type: 'basic',
    categories: ['a'],
    considerate: {
      blocklisting: 'a',
      wronglisting: 'a',
      banlisting: 'a',
      'deny-listing': 'a'
    },
    inconsiderate: {
      blacklisting: 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'whitelist',
    type: 'basic',
    categories: ['a'],
    considerate: {
      passlist: 'a',
      alrightlist: 'a',
      safelist: 'a',
      'allow list': 'a'
    },
    inconsiderate: {
      whitelist: 'a',
      'white list': 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'whitelisted',
    type: 'basic',
    categories: ['a'],
    considerate: {
      passlisted: 'a',
      alrightlisted: 'a',
      safelisted: 'a',
      'allow-listed': 'a'
    },
    inconsiderate: {
      whitelisted: 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'whitelisting',
    type: 'basic',
    categories: ['a'],
    considerate: {
      passlisting: 'a',
      alrightlisting: 'a',
      safelisting: 'a',
      'allow-listing': 'a'
    },
    inconsiderate: {
      whitelisting: 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'whitespace',
    type: 'basic',
    categories: ['a'],
    considerate: {
      space: 'a',
      blank: 'a'
    },
    inconsiderate: {
      whitespace: 'a',
      'white space': 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'whitespaces',
    type: 'basic',
    categories: ['a'],
    considerate: {
      space: 'a',
      blank: 'a'
    },
    inconsiderate: {
      whitespaces: 'a',
      'white spaces': 'a'
    },
    note: 'Replace racially-charged language with more accurate and inclusive words'
  },
  {
    id: 'savage',
    type: 'basic',
    categories: ['a'],
    considerate: {
      simple: 'a',
      indigenous: 'a',
      'hunter-gatherer': 'a'
    },
    inconsiderate: {
      primitive: 'a',
      savage: 'a',
      'stone age': 'a'
    },
    note: 'Avoid using terms that imply a group has not changed over time and that they are inferior'
  },
  {
    id: 'tribe',
    type: 'basic',
    categories: ['a'],
    considerate: {
      society: 'a',
      community: 'a'
    },
    inconsiderate: {
      tribe: 'a'
    },
    note: 'Avoid using terms that make some groups sound inferior'
  },
  {
    id: 'sophisticated-culture',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'complex culture': 'a'
    },
    inconsiderate: {
      'sophisticated culture': 'a'
    },
    note: 'Avoid using terms that make some groups sound inferior. Replace “sophisticated” with a neutral term such as “complex”'
  },
  {
    id: 'sophisticated-technology',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'complex technology': 'a'
    },
    inconsiderate: {
      'sophisticated technology': 'a'
    },
    note: 'Avoid using terms that make some groups sound inferior. Replace “sophisticated” with a neutral term such as “complex”'
  },
  {
    id: 'bugreport',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'bug report': 'a',
      snapshot: 'a'
    },
    inconsiderate: {
      bugreport: 'a'
    },
    note: 'Avoid using `bugreport`, as the word `bugre` is a slur in Brazilian Portuguese'
  },
  {
    id: 'grandfather-clause',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'legacy policy': 'a',
      'legacy clause': 'a',
      'deprecation policy': 'a'
    },
    inconsiderate: {
      'grandfather clause': 'a',
      'grandfather policy': 'a'
    },
    note: 'Avoid using phrases referring to racist United States “Jim Crow” laws. (source: https://en.wikipedia.org/wiki/Grandfather_clause#Origin)'
  },
  {
    id: 'grandfathering',
    type: 'basic',
    categories: ['a'],
    considerate: {
      deprecate: 'a'
    },
    inconsiderate: {
      grandfathering: 'a'
    },
    note: 'Avoid using phrases referring to racist United States “Jim Crow” laws. (source: https://en.wikipedia.org/wiki/Grandfather_clause#Origin)'
  },
  {
    id: 'grandfathered',
    type: 'basic',
    categories: ['a'],
    considerate: {
      deprecated: 'a',
      legacy: 'a'
    },
    inconsiderate: {
      grandfathered: 'a'
    },
    note: 'Avoid using phrases referring to racist United States “Jim Crow” laws. (source: https://en.wikipedia.org/wiki/Grandfather_clause#Origin)'
  },
  {
    id: 'make-*-great-again',
    type: 'basic',
    categories: ['a'],
    considerate: {
      improve: 'a'
    },
    inconsiderate: {
      'make * great again': 'a',
      'make * * great again': 'a',
      'make * * * great again': 'a',
      'make * * * * great again': 'a',
      'make * * * * * great again': 'a'
    }
  },
  {
    id: 'committed-suicide',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'died by suicide': 'a'
    },
    inconsiderate: {
      'committed suicide': 'a',
      'completed suicide': 'a'
    },
    note: 'Source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide, https://www.speakingofsuicide.com/2013/04/13/language/'
  },
  {
    id: 'commit-suicide',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'die by suicide': 'a'
    },
    inconsiderate: {
      'commit suicide': 'a',
      'complete suicide': 'a',
      'successful suicide': 'a'
    },
    note: 'Committing suicide is not successful/unsuccessful, that sends the wrong message (source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide, https://www.speakingofsuicide.com/2013/04/13/language/)'
  },
  {
    id: 'suicide-pact',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'rise in suicides': 'a'
    },
    inconsiderate: {
      'suicide epidemic': 'a',
      'epidemic of suicides': 'a',
      'suicide pact': 'a'
    },
    note: 'Using sensational words can cause copycat suicides or contagion (source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide)'
  },
  {
    id: 'failed-suicide',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'suicide attempt': 'a',
      'attempted suicide': 'a'
    },
    inconsiderate: {
      'failed suicide': 'a',
      'failed attempt': 'a',
      'suicide failure': 'a'
    },
    note: 'Attempted suicide should not be depicted as a failure (source: https://www.speakingofsuicide.com/2013/04/13/language, https://www.afsp.org/news-events/for-the-media/reporting-on-suicide)'
  },
  {
    id: 'suicide-note',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'a note from the deceased': 'a'
    },
    inconsiderate: {
      'suicide note': 'a'
    },
    note: 'Source: https://www.afsp.org/news-events/for-the-media/reporting-on-suicide'
  },
  {
    id: 'hang',
    type: 'basic',
    categories: ['a'],
    considerate: {
      'the app froze': 'a',
      'the app stopped responding': 'a',
      'the app stopped responding to events': 'a',
      'the app became unresponsive': 'a'
    },
    inconsiderate: {
      hang: 'a',
      hanged: 'a'
    },
    note: 'When describing the behavior of computer software, using the word “hanged” needlessly invokes the topic of death by self-harm or lynching.  Consider using the word “froze” or the phrase “stopped responding to events” or “became unresponsive” instead.'
  }
]
