import React from "react";
import { CalendarData } from "../../data/data";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Calendar = () => {
  return (
    <div className="flex flex-col gap-3 text-manrope">
      {/* Header */}
      <div className="flex px-6 sm:gap-6 gap-4 justify-between flex-wrap items-center">
        <div className="flex gap-2 items-center">
          <div className="p-1 border border-border rounded-md text-other flex justify-center items-center ">
            <IoChevronBack className="text-xl" />
          </div>
          <div className="text-other font-medium text-xs border py-2 px-4 border-border rounded-md">
            Today
          </div>
          <div className="p-1 border border-border flex justify-center items-center rounded-md text-other">
            <IoChevronForward className="text-xl" />
          </div>
          <div className="font-semibold">24 July 2024</div>
        </div>
        <div className="text-other font-medium text-xs border py-2 px-4 border-border rounded-md">
          Weekly
        </div>
      </div>

      {/* Calendar Content */}
      <div className="overflow-x-auto custom-scrollbar w-full border-t border-border">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {CalendarData.map((dayData, index) => (
                <th
                  key={index}
                  className={`text-start p-6 ${
                    index !== CalendarData.length - 1
                      ? "border-r border-border"
                      : ""
                  }`}
                >
                  <div>{dayData.day.substring(0, 3)}</div>
                  <div>03</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {CalendarData.map((dayData, index) => (
                <td
                  key={index}
                  className={`align-top p-2 ${
                    index !== CalendarData.length - 1
                      ? "border-r border-border"
                      : ""
                  }`}
                >
                  {dayData.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="p-2 border flex flex-col mb-4 gap-4 border-border rounded-md"
                    >
                      <div className="flex flex-col gap-1">
                      <div className="font-semibold text-sm">{card.title}</div>
                      <div className="text-xs text-other font-medium">{card.time}</div>
                      </div>
                      <div className="flex">
                        {card.members.map((member, memberIndex) => (
                          <img
                            key={memberIndex}
                            src={member}
                            alt={`User ${memberIndex + 1}`}
                            className="w-6 h-6 rounded-full border border-border -ml-2.5 first:ml-0"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
