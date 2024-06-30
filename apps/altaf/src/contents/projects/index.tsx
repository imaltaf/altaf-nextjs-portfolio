import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon, WazuhIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
      <SectionTitle
        title="Cybersecurity Projects"
        caption="cutting-edge-security"
        description="Explore our latest projects that focus on innovative and robust cybersecurity solutions to protect and defend against digital threats."
        button={{
          title: 'Learn more',
          href: '/docs/cybersecurity-projects',
        }}
      />

      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="project_erum"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="An automation tool that scans sub-domains"
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="siem-wazuh"
                icon={<WazuhIcon className={clsx('my-2 h-16 w-16')} />}
                description="Wazuh is an open-source security platform that provides unified SIEM (Security Information and Event Management) and XDR (Extended Detection and Response) capabilities for threat detection."
                active={currentState === 'npm'}
                onClick={() => setCurrentState('npm')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'imaltaf/project_erum - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <WazuhIcon className="h-4 w-4" />,
                      title: 'siem-wazuh - wazuh',
                      isActive: currentState === 'npm',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="imaltaf"
                      license="MIT"
                      repository="project_erum"
                      description="An automation tool that scans sub-domains."
                    />
                  )}
                  {currentState === 'npm' && (
                    <NpmWireframe
                      packageName="siem-wazuh"
                      description="Wazuh containers for Docker."
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
