import { PlaywrightTestConfig, devices } from '@playwright/test'
import exp from 'constants'

const config: PlaywrightTestConfig = {
  timeout: 2_000,
  projects: [
    {
      name: 'Chromium',
      use: {...devices['Desktop Chrome']},
    },
    // {
    //   name: 'webkit',
    //   use: {...devices['Desktop Safari']},
    // }
  ],
}

export default config

