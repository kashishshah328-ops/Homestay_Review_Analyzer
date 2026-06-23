"use client";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

import { useState } from "react";

export default function Demo() {

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (

    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 dark:text-white">

      <h1 className="text-4xl font-bold mb-10">

        UI Component Showcase

      </h1>

      <div className="space-y-8">

        {/* Button */}

        <div>

          <h2 className="font-bold mb-3">Button</h2>

          <Button>

            Click Me

          </Button>

        </div>

        {/* Input */}

        <div>

          <h2 className="font-bold mb-3">Input</h2>

          <Input

            label="Email"

            placeholder="Enter Email"

          />

        </div>

        {/* Modal */}

        <div>

          <h2 className="font-bold mb-3">Modal</h2>

          <Button onClick={() => setShowModal(true)}>

            Open Modal

          </Button>

          <Modal

            isOpen={showModal}

            onClose={() => setShowModal(false)}

            title="Demo Modal"

          >

            <p>

              This is a reusable Modal component.

            </p>

          </Modal>

        </div>

        {/* Toast */}

        <div>

          <h2 className="font-bold mb-3">Toast</h2>

          <Button onClick={() => setShowToast(true)}>

            Show Toast

          </Button>

          {

            showToast && (

              <Toast

                message="Toast Notification!"

              />

            )

          }

        </div>

        {/* Loader */}

        <div>

          <h2 className="font-bold mb-3">Loader</h2>

          <Loader />

        </div>

      </div>

    </div>

  );

}